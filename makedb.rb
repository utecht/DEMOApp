#!/usr/bin/env ruby
require "sequel"
require "json"

# connect to an in-memory database
DB = Sequel.sqlite('www/uamsDB')

DB.drop_table :relations
DB.drop_table :descriptions
DB.create_table :descriptions do
  primary_key :id
  String :uid, null: false, unique: true
  String :name, null: false
  String :type, null: false
  String :aka
  String :description
end
descriptions = DB[:descriptions]

condition_json = JSON.parse(File.read('orbweaver/conditions.json'))
condition_json.keys.each do |condition_key|
  condition = condition_json[condition_key]
  condition[:id] = descriptions.insert(type: 'condition',
                      uid: condition_key,
                      name: condition['name'],
                      aka: condition['aka'],
                      description: condition['description'])
end

expertise_json = JSON.parse(File.read('orbweaver/expertise.json'))
expertise_json.keys.each do |exp_key|
  exp = expertise_json[exp_key]
  exp[:id] = descriptions.insert(type: 'expertise',
                      uid: exp_key,
                      name: exp['name'],
                      aka: exp['aka'],
                      description: exp['description'])
end

treatment_json = JSON.parse(File.read('orbweaver/treatments.json'))
treatment_json.keys.each do |treatment_key|
  treatment = treatment_json[treatment_key]
  treatment[:id] = descriptions.insert(type: 'treatment',
                      uid: treatment_key,
                      name: treatment['name'],
                      aka: treatment['aka'],
                      description: treatment['description'])
end

puts descriptions.count

DB.create_table :relations do
  foreign_key :from, :descriptions
  foreign_key :to, :descriptions

  index [:from]
end

relations = DB[:relations]

expertise_json.values.each do |exp|
  from_id = exp[:id]
  exp["conditions_treated"].each do |ct|
    to_id = condition_json[ct['link']][:id]
    relations.insert(from: from_id, to: to_id)
  end
  exp["treatments"].each do |t|
    to_id = treatment_json[t['link']][:id]
    relations.insert(from: from_id, to: to_id)
  end
end

puts relations.count
