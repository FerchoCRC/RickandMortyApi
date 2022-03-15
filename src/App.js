import axios from "axios";
import React,{ useEffect, useState } from 'react';
import SearchBox from "./components/SearchBox";
import './index.css';
import ResidentsList from "./components/ResidentsList";
import LocationInfo from "./components/LocationInfo";



function App() {
  const getNumber = () => Math.floor(Math.random() * 126) + 1
  const [location, setLocation] = useState(null)
   
   useEffect(() => {
     axios.get(`https://rickandmortyapi.com/api/location/${getNumber()}`)
     .then(result => setLocation(result.data))
   }, [])
   
  return (
    <div className="App">
      
        {
        location? (
        <>
          <header className='bg-header ' >
            <section className='cardSearch' >
              <h1>Rick and Morty</h1>
              <p>Search from 1 to 126 to find a location.</p>
              <SearchBox setLocation={setLocation}/>
            </section>
            
          </header>
          <section className='body' >
            <LocationInfo location={location} />
            <h3>Residents:</h3>
            <ResidentsList residents={location.residents} />
            
            </section>
        </>) :
        ( 
          <section className='container-loader' >
            <div className='loader' ></div>
          </section>
        )
      }
    </div>
  );
}
export default App;
