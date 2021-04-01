#!/usr/bin/env python

from sqlalchemy.orm import Session
import requests

from . import crud, models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

def handle_detailed(item):
    id = item["id"]
    updated = item["modified_gmt"]
    type = item["type"]
    name = item["title"]["rendered"]
    content = item["content"]["rendered"]
    return {'id': id,
            'updated': updated,
            'type': type,
            'name': name,
            'content': content}

def handle_simple(item):
    id = item["id"]
    type = item["taxonomy"]
    name = item["name"]
    return {'id': id,
            'type': type,
            'name': name}

def keys_to_list(dict):
    return list(dict.keys())

def handle_provider(prov):
    meta = prov["provider_meta"]
    return {
        'id': prov["id"],
        'updated': prov["modified_gmt"],
        'full_name': meta["physician_full_name"],
        'first_name': meta["physician_full_name"],
        'last_name': meta["physician_last_name"],
        'middle_name': meta["physician_middle_name"],
        'title': meta["physician_title"],
        'service_line': meta["physician_service_line"],
        'bio': meta["physician_clinical_bio"],
        'short_bio': meta["physician_short_clinical_bio"],
        'locations': keys_to_list(meta.get("physician_locations", {})),
        'photo': meta["physician_photo"],
        'conditions': keys_to_list(meta.get("physician_conditions", {})),
        'treatments': keys_to_list(meta.get("physician_treatments", {})),
        'expertise': keys_to_list(meta.get("physician_expertise", {})),
        'clinical_titles': prov["clinical_title"],
        'languages': prov["language"],
        'patient_type': prov["patient_type"],
        'academic_title': prov["academic_title"],
        'affiliation': prov["affiliation"]
        }

def get_listings(endpoint, handler):
    more = True
    page = 1
    listings = []
    while more:
        url = f"https://uamshealth.com/wp-json/wp/v2/{endpoint}"
        querystring = {"per_page":"100","page":page}
        response = requests.request("GET", url, params=querystring)
        more = response.ok
        page += 1
        if more:
            data = response.json()
            if len(data) == 0: more = False
            for listing in data:
                listings.append(handler(listing))
    return listings

if __name__ == '__main__':
    db = SessionLocal()
    update_num = crud.get_latest(db=db)
    print(update_num)
    db.close()
    treatments = get_listings('treatment', handle_detailed)
    print(len(treatments))
    conditions = get_listings('condition', handle_detailed)
    print(len(conditions))
    expertise = get_listings('expertise', handle_detailed)
    print(len(expertise))
    languages = get_listings('language', handle_simple)
    print(len(languages))
    degrees = get_listings('medical_degree', handle_simple)
    print(len(degrees))
    titles = get_listings('clinical_title', handle_simple)
    print(len(titles))
    affiliations = get_listings('affiliation', handle_simple)
    print(len(affiliations))
    patient_types = get_listings('patient_type', handle_simple)
    print(len(patient_types))
    providers = get_listings('provider', handle_provider)
    print(len(providers))
