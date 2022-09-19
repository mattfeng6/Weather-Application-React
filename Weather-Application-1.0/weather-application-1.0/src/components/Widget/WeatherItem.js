import Card from "../../UI/Card";
import "./WeatherItem.css";

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
        </div>
      </Card>
    </div>
  );
};

export default WeatherItem;
