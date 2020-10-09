#!/usr/bin/env python
from bs4 import BeautifulSoup
import requests
import json
from generic import *

def find_all_conditions_on_page(url):
    r = requests.get(url)
    r.raise_for_status()
    e = {}
    soup = BeautifulSoup(r.text, 'html.parser')

    locations = []

    card_holder = soup.find('ul', class_='list')
    for li in card_holder.find_all('li'):
        url = li.a['href']
        locations.append(url)

    return locations

def populate_condition(url):
    print(url)
    r = requests.get(url)
    r.raise_for_status()
    c = {}
    soup = BeautifulSoup(r.text, 'html.parser')
    main = soup.main
    name = main.find('h1', class_='entry-title').text.strip()
    c['name'] = name
    aka_tag = main.find('p', class_='text-callout')
    if aka_tag:
        c['aka'] = aka_tag.text.strip()
    description_tag = main.find('div', class_='entry-content')
    if description_tag:
        c['description'] = description_tag.text.strip()
    c['providers'] = find_providers(main)
    c['areas_of_expertise'] = find_exertise(main)
    c['locations'] = find_locations(main)
    return c

urls = find_all_conditions_on_page('https://uamshealth.com/condition/?showall=true')

conditions = {}
for url in urls:
    conditions[url] = populate_condition(url)

with open('conditions.json', 'w') as fp:
    json.dump(conditions, fp)
