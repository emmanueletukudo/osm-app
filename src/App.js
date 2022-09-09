import Search from './componets/Search';
import Map from './componets/Map';

import './App.css';

function App() {
  const position = [51.505, -0.09]
  return (
    <div className="container mx-auto px-4 py-4">
      <div className="columns-2" >
        <Search />
        <Map position={position} />
      </div>
    </div>
  );
}

export default App;
