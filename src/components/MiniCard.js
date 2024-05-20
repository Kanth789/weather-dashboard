import React from "react";
import { getIcon } from "../utils/iconUtil";
import { Card } from "@mui/material";

const MiniCard = ({
  time,
  temperature,
  iconString,
  onClickOnCard,
  weatherData,
  selected,
  key,
}) => {
  const icon = getIcon(iconString);
  return (
    <Card
      variant="outlined"
      sx={{
        padding: "13px 20px",
        textAlign: "center",
        margin: "4px",
        backgroundColor: selected.datetimeStr === key ? "lightgray" : "white",
      }}
      onClick={() => onClickOnCard(weatherData)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-lg font-semibold my-1">
          {
            new Date(time)
              .toLocaleTimeString("en", { weekday: "long" })
              .split(" ")[0]
          }
        </span>
        <hr />
        <img src={icon} alt="mini_card_weather" width={80} className="my-1" />
        <span className="text-lg font-semibold my-1">
          Temperature:{" "}
          <p className="text-sm font-semibold my-1">{temperature}&deg;C</p>
        </span>
      </div>
    </Card>
  );
};

export default MiniCard;
