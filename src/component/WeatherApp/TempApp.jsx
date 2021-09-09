import "./App.css";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const TempApp = () => {
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState("Mumbai");
    useEffect(() => {
        const fetchAPI = async() => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=29cbd36874c4ae69407374e300680059`;
            const api = await fetch(url);
            const res = await api.json();
            setCity(res.main);

        }
        fetchAPI();
    },[search])
    return (
        <>
            <div className="box">
                <div className="inputData">
                    <input
                        type="search"
                        className="inputField"
                        placeholder="Enter city name"
                        value={search}
                        onChange={ (event) => { setSearch(event.target.value) } }
                        />
                </div>
                
                    
                <div className="info">
                    {
                        !city ? <h1>No Data Found</h1> :
                            (
                                <div>
                                    <h2 className="location">
                                        <i class="fas fa-street-view"></i>{search}
                                    </h2>
                                    <h1 className="temp">{city.temp}<sup>o</sup>Cel</h1>
                                    <h3 className="tempmin_max">Min:{ city.temp_min }<sup>o</sup>Cel Max:{ city.temp_max}<sup>o</sup>Cel</h3>
                                </div>
                        )
                    }
                            
                        </div>
                    
                
                
            </div>
        </>
    )
}
export default TempApp;