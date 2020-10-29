import json
import uuid

addresses = {}
addresses['type'] = 'FeatureCollection'
anchors = {}
anchors['type'] = 'FeatureCollection'
address_features = []
anchor_features = []
with open('markers.json') as f:
    markers = json.load(f)
    for marker in markers:
        address = {}
        address['type'] = 'Feature'
        address_id = str(uuid.uuid4())
        address['id'] = address_id
        address['feature_type'] = 'address'
        props = {}
        props['marker-color'] = '#ff2600'
        props['marker-size'] = 'medium'
        props['title'] = marker['title']
        props['address'] = marker['address']
        props['locality'] = 'Little Rock'
        props['province'] = 'US-AR'
        props['country'] = 'US'
        address['properties'] = props
        address['geometry'] = None
        address_features.append(address)
        anchor = {}
        anchor['id'] = str(uuid.uuid4())
        anchor['feature_type'] = 'anchor'
        props = {}
        props['address_id'] = address_id
        anchor['properties'] = props
        anchor['type'] = 'Feature'
        geo = {}
        geo['type'] = 'Point'
        geo['coordinates'] = [float(marker['lng']), float(marker['lat'])]
        anchor['geometry'] = geo
        anchor_features.append(anchor)

addresses['features'] = address_features
with open('imdf/address.geojson', 'w') as f:
    f.write(json.dumps(addresses))

anchors['features'] = anchor_features
with open('imdf/anchor.geojson', 'w') as f:
    f.write(json.dumps(anchors))

footprints = {}
footprints['type'] = 'FeatureCollection'
buildings = {}
buildings['type'] = 'FeatureCollection'
footprint_features = []
building_features = []
with open('polys.json') as f:
    polys = json.load(f)
    for poly in polys:
        building = {}
        building['type'] = 'Feature'
        building['feature_type'] = 'building'
        building_id = str(uuid.uuid4())
        building['id'] = building_id
        props = {}
        props['category'] = 'parking'
        props['name'] = poly['title']
        building['properties'] = props
        building['geometry'] = None
        building_features.append(building)
        footprint = {}
        footprint['type'] = 'Feature'
        footprint_id = str(uuid.uuid4())
        footprint['id'] = footprint_id
        footprint['feature_type'] = 'footprint'
        props = {}
        props['stroke'] = "#{}".format(poly['linecolor'])
        props['stroke-opacity'] = float(poly['lineopacity'])
        props['fill'] = "#{}".format(poly['fillcolor'])
        props['fill-opacity'] = float(poly['opacity'])
        props['title'] = poly['title']
        props['category'] = "ground"
        props['building_ids'] = [building_id]
        footprint['properties'] = props
        geo = {}
        geo['type'] = 'Polygon'
        coords = []
        flat, flng = poly['polydata'][0]
        for (lat, lng) in poly['polydata']:
            coords.append([float(lng), float(lat)])
        coords.append([float(flng), float(flat)])
        geo['coordinates'] = [coords]
        footprint['geometry'] = geo
        footprint_features.append(footprint)

footprints['features'] = footprint_features
with open('imdf/footprint.geojson', 'w') as f:
    f.write(json.dumps(footprints))

buildings['features'] = building_features
with open('imdf/building.geojson', 'w') as f:
    f.write(json.dumps(buildings))
