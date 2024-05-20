import "./App.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { useStateContext } from "./context";
import WeatherCard from "./components/WeatherCard";
import MiniCard from "./components/MiniCard";
import { CircularProgress } from "@mui/material";

function App() {
  const [input, setInput] = useState("");
  const { weather, location, values, setPlace, loading, setWeather } = useStateContext();

  const onClickSearch = () => {
    setPlace(input);
  };

  const onClickOnCard = (value) => {
    setWeather(value);
  };

  return (
    <div className="container px-14 my-2 font-sans" style={{ margin: "auto" }}>
      <h1 className="text-3xl font-semibold text-center my-4 ">
        Weather Dashboard
      </h1>
      <div className="w-full float-right my-5">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
            float: "right",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Location"
            inputProps={{ "aria-label": "search location" }}
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          <IconButton
            type="button"
            sx={{ p: "10px" }}
            aria-label="search"
            onClick={onClickSearch}
            disabled={!input}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
      </div>
      {loading ? (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress color="inherit" />
        </div>
      ) : (
        <div className="my-1">
          <WeatherCard weather={weather} location={location} />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              marginTop: 14,
            }}
          >
            {values.map((eachItem) => {
              return (
                <MiniCard
                  key={eachItem.datetimeStr}
                  time={eachItem.datetimeStr}
                  temperature={eachItem.temp}
                  iconString={eachItem.conditions}
                  onClickOnCard={onClickOnCard}
                  weatherData={eachItem}
                  selected={weather}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
