import React  from "react";
import { getBackGroundImage, getIcon } from "../utils/iconUtil";
import { Card } from "@mui/material";
import useWindowSize from "../utils/useWindowSize";
import { useDate } from "../utils/useDate";

const WeatherCard = (props) => {
  const { weather, location } = props;

  const icon = getIcon(weather?.conditions);
  const backGroundImage = getBackGroundImage(weather?.conditions);
  const { windowWidth } = useWindowSize();
  const { time } = useDate();

  return (
    <Card
      variant="outlined"
      sx={{ maxWidth: "100%", padding: "4px 10px", textAlign: "center" }}
    >
      <div
        className={`${
          windowWidth < 1024 ? "d-flex flex-column" : "flex flex-row"
        }`}
      >
        <div
          style={{
            width: windowWidth < 1024 ? "100%" : "50%",
            height: "100%",
            position: "relative",
          }}
        >
          <img src={backGroundImage} alt="banner" width="100%" height="100%" />
          <span
            style={{ position: "absolute", bottom: 0, right: 0 }}
            className="px-2 text-2xl font-semibold"
          >
            {time}
          </span>
        </div>
        <div
          className="ps-2"
          style={{
            width: windowWidth < 1024 ? "100%" : "50%",
            marginTop: windowWidth < 1024 ? "10px" : "0px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="text-2xl font-semibold"><h1>{location}</h1></div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={icon} alt="weather-icon" width={100} height={100}/>
            <span className="text-lg font-semibold">{weather?.temp}&deg;c</span>
          </div>
          <div className="text-lg font-semibold"><span>{weather?.place}</span></div>
          <div className="text-xl font-semibold">
            <p >{new Date(weather.datetimeStr).toDateString()}</p>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "40% 40%",
              columnGap: 15,
              rowGap: 10,
              marginBottom: 10,
              justifyContent: "center",
            }}
            className="my-3"
          >
            <div className="glassCard">
              <span className="text-sm font-semibold">Wind Speed</span>{" "}
              <p className="text-sm ">{weather?.wspd}</p>
            </div>
            <div className="glassCard">
              <span className="text-sm font-semibold">Humidity </span>
              <p>{weather?.humidity}</p>
            </div>
            <div className="glassCard my-2">
              <span className="text-sm font-semibold">Heat Index </span>
              <p>{weather?.heatindex ? weather?.heatindex : "NULL"}</p>
            </div>
          </div>

          <hr />
          <div className="text-lg font-semibold py-2">
            <span>{weather?.conditions}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
