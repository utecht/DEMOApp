#!/usr/bin/env python
from bs4 import BeautifulSoup
import requests
import json
from generic import *

def find_all_locations_on_page(url):
    r = requests.get(url)
    r.raise_for_status()
    e = {}
    soup = BeautifulSoup(r.text, 'html.parser')

    locations = []

    card_holder = soup.find('div', attrs={'data-name':'locations'})
    for card in card_holder.find_all('div', class_='card'):
        url = card.a['href']
        locations.append(url)

    return locations

def populate_location(url):
    print(url)
    r = requests.get(url)
    r.raise_for_status()
    l = {}
    soup = BeautifulSoup(r.text, 'html.parser')
    main = soup.main
    name = main.find('h1', class_='page-title').text
    l['url'] = url
    l['name'] = name.strip()
    address_bad = main.find('h2', class_='sr-only', string='Address').find_next('p').text
    l['address'] = " ".join(address_bad.split())
    # phone numbers
    contact_tag = main.find('h2', string='Contact Information').find_next('dl')
    l['contact_sections'] = []
    current_section = {}
    for contact in contact_tag.children:
        if contact.name == 'dt':
            if current_section != {}:
                l['contact_sections'].append(current_section)
            current_section = {'name':contact.text, 'numbers': []}
        elif contact.name == 'dd':
            this_number = {}
            this_number['phone'] = contact.a.text
            if contact.span:
                this_number['subtitle'] = contact.span.text
            current_section['numbers'].append(this_number)
        else:
            pass
    l['contact_sections'].append(current_section)

    # picture
    l['picture'] = 'http://uamshealth.com/wp-content/uploads/2019/11/Bruce-fountain-1024x576.jpg'
    picture = main.find('picture')
    if(picture):
        l['picture'] = picture.find_next('img')['src']
        print(l['picture'])

    # clinic hours
    hours_tag = main.find('dl', class_='hours')
    try:
        l['hours'] = []
        days = hours_tag.find_all('dt')
        hours = hours_tag.find_all('dd')
        for day, hour in zip(days, hours):
            l['hours'].append({'day':day.string.strip(), 'hour':hour.string.strip()})
    except:
        pass
    about_tag = main.find('h2', string=f"About {name}")
    if about_tag:
        l['about'] = about_tag.find_next('div').text
    parking_tag = main.find('h2', string='Parking Information')
    if parking_tag:
        l['parking'] = parking_tag.parent.text.strip()
    appointment_info_tag = main.find('h2', string='Appointment Information')
    if appointment_info_tag:
        l['appointment_info'] = appointment_info_tag.find_next_sibling('div').text.strip()
    l['conditions_treated'] = find_conditions(main)
    l['treatments'] = find_treatments(main)
    l['providers'] = find_providers(main)
    l['areas_of_expertise'] = find_exertise(main)
    return l

location_urls = []
NUMBER_OF_PAGES = 11
for i in range(1, NUMBER_OF_PAGES + 1):
    url = f'https://uamshealth.com/location/?_paged={i}'
    location_urls += find_all_locations_on_page(url)

locations = []
for url in location_urls:
    locations.append(populate_location(url))

with open('locations.json', 'w') as fp:
    json.dump(locations, fp)
