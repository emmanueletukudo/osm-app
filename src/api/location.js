const OSM_BASE_URL = "https://nominatim.openstreetmap.org/search?"

const fetchFunc = (q) => {
  const params = {
    q: q,
    format: "json",
    addressdetails: 1,
    polygon_geojson: 0,
  }
  const queryString = new URLSearchParams(params);
  const requestObj = {
    method: "GET",
    redirect: "follow",
  }

  const res = fetch(`${OSM_BASE_URL}${queryString}`, requestObj)
    .then(res => res.text())
    .then(result => JSON.parse(result))
    .catch(err => console.log(err));
  return res;
}
export { OSM_BASE_URL, fetchFunc };
