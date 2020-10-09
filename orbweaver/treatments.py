#!/usr/bin/env python
from bs4 import BeautifulSoup
import requests
import json
from generic import *

def find_all_links_on_page(url):
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

def populate_treatment(url):
    print(url)
    r = requests.get(url)
    r.raise_for_status()
    t = {}
    soup = BeautifulSoup(r.text, 'html.parser')
    main = soup.main
    name = main.find('h1', class_='entry-title').text.strip()
    t['name'] = name
    aka_tag = main.find('p', class_='text-callout')
    if aka_tag:
        t['aka'] = aka_tag.text.strip()
    description_tag = main.find('div', class_='entry-content')
    if description_tag:
        t['description'] = description_tag.text.strip()
    t['providers'] = find_providers(main)
    t['areas_of_expertise'] = find_exertise(main)
    t['locations'] = find_locations(main)
    return t

urls = find_all_links_on_page('https://uamshealth.com/treatment/?showall=true')

treatments = {}
for url in urls:
    treatments[url] = populate_treatment(url)

with open('treatments.json', 'w') as fp:
    json.dump(treatments, fp)
