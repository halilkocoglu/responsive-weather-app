import {   useState } from "react";
import cities from "../../../json/cities.json"
import "./header.css"
import { useWeatherContext } from "../../../contexts/WeatherContext";


function Header () {
    const { city, setCity } = useWeatherContext()

    const [searchValue, setSearchValue] = useState("")
    const [filteredData, setFilteredData] = useState([])


    const handleChange = (event) => {
        setSearchValue(event.target.value);
        filterCity(event.target.value)
        
    }

    const filterCity = (text) => {
        const filtered = cities.filter((item) => {
            return item.name.toLowerCase().includes(text.toLowerCase());
        })
        setFilteredData(filtered )
    }
    return (
        <div className="header-container">
            <div className="header-container_logo">
                WeatherApp
            </div>
            
            <div className="header-conatiner_search">
                <form action="">
                    <input 
                    className="input" 
                    type="text" 
                    value={searchValue}
                    placeholder=" Search a city..." 
                    onChange={handleChange}
                    />
                </form>
                <ul className={`search-list ${searchValue ? "" : "d-none"}`} >
                    { 
                        filteredData.map((item) => {
                            return(
                            <li key={item.id}>
                                <button onClick={() => setCity(item.name)}>{item.name}</button>
                            </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className="city">
                <h3>{city}</h3>
            </div>
            
        </div>
    )
}


export default Header;