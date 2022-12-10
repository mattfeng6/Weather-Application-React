import "./WeatherDate.css";

import Card from "../../UI/Card";

const WeatherDate = () => {
  const date = new Date();

  const month = date.toLocaleString("en-US", { month: "long" }).substring(0, 3);
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  const th = () => {
    const lastNumber = day.substring(day.length - 1, day.length);
    if (lastNumber === "1") return "st";
    if (lastNumber === "2") return "nd";
    if (lastNumber === "3") return "rd";
    else return "th";
  };

  const weekDay = date.toLocaleString("en-US", { weekday: "long" });

  return (
    <Card className="date">
      <div className="day">
        {month}. {day}
        {th()}
      </div>
      <div className="weekDay">{weekDay}</div>
    </Card>
  );
};

export default WeatherDate;
