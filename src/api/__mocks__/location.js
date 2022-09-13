const OSM_BASE_URL = "https://nominatim.openstreetmap.org/search?"

const fetchFunc = () => {

  return Promise.resolve(
    [
      {
        "place_id": 237737,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 154336516,
        "boundingbox": [
          "37.9706638",
          "38.0106638",
          "-81.4464987",
          "-81.4064987"
        ],
        "lat": "37.9906638",
        "lon": "-81.4264987",
        "display_name": "United, Kanawha County, West Virginia, 25060, United States",
        "class": "place",
        "type": "hamlet",
        "importance": 0.4233866831324339,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_village.p.20.png",
        "address": {
          "hamlet": "United",
          "county": "Kanawha County",
          "state": "West Virginia",
          "ISO3166-2-lvl4": "US-WV",
          "postcode": "25060",
          "country": "United States",
          "country_code": "us"
        }
      },
      {
        "place_id": 257846,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 158356856,
        "boundingbox": [
          "40.1984039",
          "40.2384039",
          "-79.5078157",
          "-79.4678157"
        ],
        "lat": "40.2184039",
        "lon": "-79.4878157",
        "display_name": "United, Mount Pleasant Township, Westmoreland County, Pennsylvania, 15689, United States",
        "class": "place",
        "type": "hamlet",
        "importance": 0.41201987893667336,
        "icon": "https://nominatim.openstreetmap.org/ui/mapicons/poi_place_village.p.20.png",
        "address": {
          "hamlet": "United",
          "city": "Mount Pleasant Township",
          "county": "Westmoreland County",
          "state": "Pennsylvania",
          "ISO3166-2-lvl4": "US-PA",
          "postcode": "15689",
          "country": "United States",
          "country_code": "us"
        }
      },
      {
        "place_id": 23562395,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "node",
        "osm_id": 2557934432,
        "boundingbox": [
          "41.631746",
          "41.651746",
          "-83.6370601",
          "-83.6170601"
        ],
        "lat": "41.641746",
        "lon": "-83.6270601",
        "display_name": "United, Toledo, Lucas County, Ohio, 43607, United States",
        "class": "place",
        "type": "neighbourhood",
        "importance": 0.35,
        "address": {
          "neighbourhood": "United",
          "city": "Toledo",
          "county": "Lucas County",
          "state": "Ohio",
          "ISO3166-2-lvl4": "US-OH",
          "postcode": "43607",
          "country": "United States",
          "country_code": "us"
        }
      },
      {
        "place_id": 126791166,
        "licence": "Data © OpenStreetMap contributors, ODbL 1.0. https://osm.org/copyright",
        "osm_type": "way",
        "osm_id": 96584804,
        "boundingbox": [
          "40.598831",
          "40.6035825",
          "49.6670886",
          "49.6727463"
        ],
        "lat": "40.6016607",
        "lon": "49.66983606396855",
        "display_name": "United (7,8,12) Block, Sumgayit, Absheron-Khizi, Azerbaijan",
        "class": "place",
        "type": "neighbourhood",
        "importance": 0.35,
        "address": {
          "neighbourhood": "United (7,8,12) Block",
          "city": "Sumgayit",
          "state": "Absheron-Khizi",
          "country": "Azerbaijan",
          "country_code": "az"
        }
      }
    ]
  )

}
export { OSM_BASE_URL, fetchFunc };
