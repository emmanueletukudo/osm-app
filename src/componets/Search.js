import React, { useEffect, useState } from 'react';
import { fetchFunc } from '../api/location';
const maker = "../maker.png";

const Search = () => {
  const [search, setSearch] = useState("");
  const [palces, setPlaces] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (search === "") {
      setPlaces([]);
      setShow(false);
    }
  }, [search])

  const searchMap = (e) => {
    e.preventDefault();
    fetchFunc(search).then(res => {
      setPlaces(res)
      setShow(true)
    });
  }

  const handleSearch = (l) => {
    console.log(l);
  }
  return (

    <form>
      <label htlmfor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} id="default-search" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search for locations, places..." required="" />
        <button type="submit" onClick={searchMap} className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
      </div>
      {show &&
        <ul role="list" className="p-6 divide-y divide-slate-200 bg-gray-50 dark:bg-gray-300">
          {palces.map((p, i) =>
            <li className="flex py-4 first:pt-0 last:pb-0" key={p?.osm_id} style={{ cursor: "pointer" }}>
              <img className="h-4 w-4 rounded-full" src={p?.icon ? p?.icon : maker} alt="" />
              <div className="ml-3 overflow-hidden">
                <p className="text-sm font-medium text-slate-900">{p?.display_name}</p>
              </div>
            </li>
          )}
        </ul>
      }

    </form>

  )
}

export default Search
