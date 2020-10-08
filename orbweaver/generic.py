#!/usr/bin/env python

def find_conditions(main):
    conditions_treated = []
    try:
        condition_tags = main.find(string='Conditions Treated').parent.parent.find_all('li')
        for tag in condition_tags:
            name = tag.a.string.strip()
            link = tag.a['href']
            conditions_treated.append({'name':name,'link':link})
    except:
        pass
    return conditions_treated

def find_treatments(main):
    treatments = []
    try:
        treatment_tags = main.find(string='Medical Treatments and Procedures Performed').parent.parent.find_all('li')
        for tag in treatment_tags:
            name = tag.a.string.strip()
            link = tag.a['href']
            treatments.append({'name':name,'link':link})
    except:
        pass
    return treatments

def find_providers(main):
    providers = []
    try:
        provider_tags = main.find('section', id='doctors').find_all('div', class_='card')
        for tag in provider_tags:
            picture = tag.picture.img['src']
            name = tag.find('span', class_='name').string
            specialty = tag.find('span', class_='subtitle').string
            link = tag.find('a', string="View Profile")['href']
            providers.append({'name':name,
                                   'picture':picture,
                                   'specialty':specialty,
                                   'link':link})
    except:
        pass
    return providers

def find_locations(main):
    locations = []
    try:
        location_tags = main.find('section', id='locations').find_all('div', class_='card')
        for tag in location_tags:
            picture = tag.img['src']
            name = tag.find('span', class_='name').string
            link = tag.find('span', class_="name").a['href']
            locations.append({'name':name,
                                   'picture':picture,
                                   'link':link})
    except:
        pass
    return locations

def find_exertise(main):
    expertise = []
    try:
        expertise_tags = main.find('section', id='expertise').find_all('div', class_='card')
        for tag in expertise_tags:
            picture = tag.find('img', class_='card-img-top')['src']
            name = tag.find('span', class_='name').string
            link = tag.find('span', class_="name").a['href']
            expertise.append({'name':name,
                              'picture':picture,
                              'link':link})
    except:
        pass
    return expertise
