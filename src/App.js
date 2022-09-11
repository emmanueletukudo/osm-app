import React, { useState } from "react";
import Search from './componets/Search';
import Map from './componets/Map';
import './App.css';


function App() {
  const [place, setPlace] = useState(null);
  // const position = [51.505, -0.09]
  console.log(place);
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="columns-2" >
        <Search position={place} setPlace={setPlace} />
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
