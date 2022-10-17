import Card from "../../UI/Card";
import "./WeatherItem.css";
import "../../weather-icons-master/css/weather-icons.css";

const updateWeatherStatusIcon = (props) => {
  var status = props.status.toString().toLowerCase();
  switch (status) {
    case "clear":
      return "wi wi-day-sunny";
    case "clouds":
      return "wi wi-cloud";
    case "rain":
      return "wi wi-rain";
    case "smoke":
      return "wi wi-smoke";
    default: 
      return "wi wi-na";
  }
};

const WeatherItem = (props) => {
  return (
    <div>
      <Card className="item">
        <Card className="location">
          <div className="name">{props.name.toUpperCase()}</div>
          <div className="coun">{props.coun}</div>
        </Card>
        <div className="condition">
          <div className="temp">{Math.round(props.temp)}°C</div>
          <div className="status">{props.status}</div>
          <div className="icon">
            <i class={updateWeatherStatusIcon(props)} />
          </div>
        </div>
      </Card>
    </div>
  );
};

export default WeatherItem;
