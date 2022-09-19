import WeatherList from "./WeatherList";
import Card from "../../UI/Card";
import './WeatherWidget.css'

const WeatherWidget = (props) => {
  return (
    <Card className="widget">
      <WeatherList items={props.items} />
    </Card>
  );
};

export default WeatherWidget;