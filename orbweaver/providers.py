#!/usr/bin/env python
from bs4 import BeautifulSoup
import requests
import json
from generic import *
import re

def find_all_providers_on_page(url):
    r = requests.get(url)
    r.raise_for_status()
    e = {}
    soup = BeautifulSoup(r.text, 'html.parser')

    profiles = []

    card_holder = soup.find('div', attrs={'data-name':'physician'})
    for card in card_holder.find_all('div', class_='item-container'):
        profile = card.find("a", class_="btn-primary")
        url = profile['href']
        profiles.append(url)

    return profiles

def populate_provider(url):
    print(url)
    r = requests.get(url)
    r.raise_for_status()
    p = {}
    soup = BeautifulSoup(r.text, 'html.parser')
    main = soup.main
    name = main.find('h1', class_='page-title').text
    p['url'] = url
    p['name'] = main.find('span', class_='name').text.strip()
    p['subtitle'] = main.find('span', class_='subtitle').text.strip()

    # picture
    p['picture'] = 'https://uamshealth.com/wp-content/plugins/UAMSWP-Find-a-Doc/assets/svg/no-image_3-4.svg'
    picture = main.find('picture')
    if(picture):
        p['picture'] = picture.find_next('img')['src']

    section = main.find('section', class_='doctor-info').div.div
    dl = section.find('dl')
    # languages
    language_tag = dl.find_next('dt', string=re.compile('Language[s]?'))
    if(language_tag):
        languages = language_tag.find_next_sibling('dd').text
        if(languages):
            p['languages'] = languages.split(',')


    # about
    p['about'] = ''
    about = main.find('div', class_='module-body')
    if(about):
        p['about'] = about.text.strip()
    p['conditions_treated'] = find_conditions(main)
    p['treatments'] = find_treatments(main)
    p['providers'] = find_providers(main)
    p['areas_of_expertise'] = find_exertise(main)
    return p

provider_urls = []
NUMBER_OF_PAGES = 95
for i in range(1, NUMBER_OF_PAGES + 1):
    print(i)
    url = f'https://uamshealth.com/provider/?_paged={i}'
    provider_urls += find_all_providers_on_page(url)

providers = []
for i, url in enumerate(provider_urls):
    print('{}/{}'.format(i, len(provider_urls)))
    providers.append(populate_provider(url))

with open('providers.json', 'w') as fp:
    json.dump(providers, fp)
