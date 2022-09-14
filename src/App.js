import React, { useState } from "react";
import Search from './componets/Search';
import Map from './componets/Map';
import './App.css';


function App() {
  const [place, setPlace] = useState(null);
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6" >
        <Search position={place} setPlace={setPlace} />
        <Map place={place} />
      </div>
    </div>
  );
}

export default App;
