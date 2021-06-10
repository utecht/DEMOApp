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
            'updated': None,
            'type': type,
            'name': name}

def handle_location(item):
    id = item["id"]
    name = item["title"]["rendered"]
    return {'id': id,
            'updated': None,
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

def get_listings(endpoint, handler, save_handler, db):
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
                l = handler(listing)
                save_handler(l, db)
                listings.append(l)
    return listings

def save_attributes(data, atype, db):
    for attr in data:
        row = schemas.Attribute(atype=atype, **attr)
        db.add(models.Attribute(**row.dict()))
        db.commit()

def save_provider(provider, db):
    p = schemas.Provider(
        id=provider['id'],
        full_name=provider['full_name'],
        first_name=provider['first_name'],
        middle_name=provider['middle_name'],
        last_name=provider['last_name'],
        title=provider['title'],
        service_line=provider['service_line'],
        bio=provider['bio'],
        short_bio=provider['short_bio'],
        photo=provider['photo']
    )
    attributes = []
    attributes += [int(x) for x in provider['locations']]
    attributes += [int(x) for x in provider['conditions']]
    attributes += [int(x) for x in provider['treatments']]
    attributes += [int(x) for x in provider['expertise']]
    attributes += [int(x) for x in provider['clinical_titles']]
    attributes += [int(x) for x in provider['languages']]
    attributes += [int(x) for x in provider['patient_type']]
    attributes += [int(x) for x in provider['academic_title']]
    attributes += [int(x) for x in provider['affiliation']]
    db.add(models.Provider(**p.dict()))
    for attribute in attributes:
        a = schemas.ProviderAttribute(provider_id=p.id, attribute_id=attribute)
        db.add(models.ProviderAttribute(**a.dict()))
    db.commit()

def nothing(x, db):
    pass

if __name__ == '__main__':
    db = SessionLocal()
    #treatments = get_listings('treatment', handle_detailed, nothing, db)
    #save_attributes(treatments, 'treatment', db)
    #print(len(treatments))
    #conditions = get_listings('condition', handle_detailed, nothing, db)
    #save_attributes(conditions, 'condition', db)
    #print(len(conditions))
    #expertise = get_listings('expertise', handle_detailed, nothing, db)
    #save_attributes(expertise, 'exertise', db)
    #print(len(expertise))
    #languages = get_listings('language', handle_simple, nothing, db)
    #save_attributes(languages, 'language', db)
    #print(len(languages))
    #degrees = get_listings('medical_degree', handle_simple, nothing, db)
    #save_attributes(degrees, 'medical_degree', db)
    #print(len(degrees))
    #titles = get_listings('clinical_title', handle_simple, nothing, db)
    #save_attributes(titles, 'clinical_title', db)
    #print(len(titles))
    #affiliations = get_listings('affiliation', handle_simple, nothing, db)
    #save_attributes(affiliations, 'affiliation', db)
    #print(len(affiliations))
    #patient_types = get_listings('patient_type', handle_simple, nothing, db)
    #save_attributes(patient_types, 'patient_type', db)
    #print(len(patient_types))
    #locations = get_listings('location', handle_location, nothing, db)
    #save_attributes(locations, 'location', db)
    providers = get_listings('provider', handle_provider, save_provider, db)
    db.close()
