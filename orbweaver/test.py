#!/usr/bin/env python
from bs4 import BeautifulSoup
from generic import *

with open('test.html') as fp:
    soup = BeautifulSoup(fp, 'html.parser')

    c = {}
    main = soup.main

    print(main)
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
    print(c)
