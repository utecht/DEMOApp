#!/usr/bin/env python
from bs4 import BeautifulSoup
from generic import *

with open('test.html') as fp:
    soup = BeautifulSoup(fp, 'html.parser')

    l = {}
    main = soup.main

    l['areas_of_expertise'] = find_exertise(main)
    print(l)
