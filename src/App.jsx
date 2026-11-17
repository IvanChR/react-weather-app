import { useEffect, useRef, useState } from "react";
import "./app.css";
import WeatherData from "./WeatherData";

function App() {

  const KEY = '6623a2447e3d450a87f212340260405'
  const input = useRef()

  const [weatherData, setWeatherData] = useState(null)
  const [query, setQuery] = useState("Guadalajara")

  const handleSearch = (e) => {
    e.preventDefault()
    const searchValue = input.current.value 
    setQuery(searchValue)
    fetchQuery(searchValue)
  }

  const fetchQuery = (queryParam) => {

    const url = `https://api.weatherapi.com/v1/current.json?q=${queryParam}&lang=es&key=${KEY}`

    fetch(url)
      .then(res => res.json())
      .then(data => {
        data ? setWeatherData(data) : null
      })
      .catch(err => { console.log(err + ': Ocurrio un error') })

  }


  useEffect(() => {
    fetchQuery(query)
  }, [])

  return (
    <>
      <div className="container">
        <h1>Weather App</h1>

        <form className="search-location" onSubmit={handleSearch}>
          <label htmlFor="search">Busca tu ciudad</label><br />
          <input
            id="search"
            name="search"
            ref={input}
            className="search"
            type="search"
            onChange={() => setQuery(input.current.value)} />
          <input type="submit" className="submitBtn" />
        </form>

        {
          weatherData && <WeatherData data={weatherData}/>
        }
      </div>
    </>
  )
}

export default App
