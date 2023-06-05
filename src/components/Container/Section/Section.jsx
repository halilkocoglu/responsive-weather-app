import "./section.css";
import { useWeatherContext } from "../../../contexts/WeatherContext";

function Section () {
    let { weatherData, current } = useWeatherContext();
    // console.log("***weatherData: ", weatherData);
    // console.log("***currentData: ", current);
    const hourData = weatherData[0].hour.filter((item,index) => index % 3 === 0).slice(4,11)
    // console.log(hourData);
        // console.log(date);
    return (
        <div className="section-container">
            <div className="section-hourly">
                
                    {current.condition && (
                    <div className="single-temp">
                    <img src={current.condition.icon} alt="icon" />
                    <div>{current.temp_c}</div>
                    <div>{current.condition.text}</div>
                    </div>
                    )
                    }
                    {!current.condition &&
                    (
                    <div className="single-temp">
                        <h3>Loading...</h3>
                    </div>
                    )
                    }
                    
                
                <div className="multi-temp">
                    {
                        hourData.map((item, index) => {
                            return (
                            <div className="hour-card" key={index}>
                                <img src={item.condition.icon} alt="icon" />
                                <div>{item.temp_c} </div>
                                <div>{item.condition.text} </div>
                                <div>{item.time} </div>
                            </div>)
                        })
                    }
                </div>
            </div>
            <div className="section-now">
                <div className="border1">
                    <div>Feels like</div>
                    <div>{current.feelslike_c}</div>
                </div>
                <div className="border1"> 
                    <div>Moisture</div>
                    <div>{current.humidity}</div>
                </div>
                <div className="border1">
                    <div>Wind kph</div>
                    <div>{current.wind_kph}</div>
                </div>
                <div className="border1">
                    <div>Wind Direction</div>
                    <div>{current.wind_dir}</div>
                </div>
                <div className="border1">
                    <div>Wind degree</div>
                    <div>{current.wind_degree}</div>
                </div>
                <div className="border1">
                    <div>Pressure mb</div>
                    <div>{current.pressure_mb}</div>
                </div>
            </div>
            <div className="section-weekly">
            {
                        weatherData.map((item, index) => {
                            // console.log(item);
                            return (
                            <div className="weekly-card" key={index}>
                                
                                <img  src={item.day.condition.icon} alt="icon" />
                                <div>{item.day.avgtemp_c} </div>
                                <div>{item.day.condition.text} </div>
                                <div>{item.date} </div>
                            </div>)
                        })
                    }
            </div>
        </div>
    )
}


export default Section;