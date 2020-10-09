#!/usr/bin/env python
from bs4 import BeautifulSoup
import requests
import json
from generic import *

def find_all_expertises_on_page(page):
    with open('aoe1.html') as fp:
        soup = BeautifulSoup(fp, 'html.parser')

        expertises = []

        card_holder = soup.find('div', attrs={'data-name':'expertise'})
        for card in card_holder.find_all('div', class_='card'):
            print(card.a['href'])
            url = card.a['href']
            expertises.append(url)

        return expertises

def populate_exertise(url):
    print(url)
    r = requests.get(url)
    r.raise_for_status()
    e = {}
    soup = BeautifulSoup(r.text, 'html.parser')
    main = soup.main
    e['name'] = main.article.header.text.strip()

    # description
    description = ""
    aka_tag = main.article.find('p', class_='text-callout')
    description_tags = main.article.find('p')
    if aka_tag:
        e['aka'] = aka_tag.string
        description_tags = aka_tag.next_siblings
    for tag in description_tags:
        if(tag.string):
            description += tag.string
    e['description'] = description
    e['conditions_treated'] = find_conditions(main)
    e['treatments'] = find_treatments(main)
    e['providers'] = find_providers(main)
    e['locations'] = find_locations(main)
    return e



pages = ['aoe1.html', 'aoe2.html']

expertise_urls = []
for page in pages:
    expertise_urls += find_all_expertises_on_page(page)

expertises = {}
for url in expertise_urls:
    expertises[url] = populate_exertise(url)

with open('expertise.json', 'w') as fp:
    json.dump(expertises, fp)
