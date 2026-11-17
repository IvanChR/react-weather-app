const WeatherData = ({data}) => {
    return (
      <>
        <div className="current">
          <div className="location">
            <div className="condition">
              <img src={data.current.condition.icon} />
              <p>{data.current.condition.text}</p>
            </div>
            <h2>{data.location.name}</h2>
            <h3><span>{data.location.region}</span>, <span>{data.location.country}</span></h3>
          </div>
          <div className="temperature">
            <p >
              {data.current.temp_c}° C
            </p>
            <span>{data.current.temp_f}° F</span>
          </div>
          <div className="time">
            <p>Hora local:</p>
            <p>{data.location.localtime}</p>
          </div>
          <div className="lat-long">
            <p><span>lat: {data.location.lat}</span> <br /> <span> lon: {data.location.lon}</span></p>
          </div>
        </div>
      </>

    )
  }

  export default WeatherData;