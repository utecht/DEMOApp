#!/usr/bin/env python

import json
import subprocess

with open('../../orbweaver/locations.json') as f:
    data = f.read()

    locations = json.loads(data)
    for location in locations:
        file_url = location['picture']
        url = location['url']
        file_name = file_url.split('/')[-1]
        #if(file_url):
        #    subprocess.run(['wget', file_url])
        print("'{}': require('./images/locations/{}'),".format(url, file_name))
