import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const [weather, setWeather] = useState({});
  const [values, setValues] = useState([]);
  const [place, setPlace] = useState("Hyderabad");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  // API
  const getWeatherDetails = async () => {
    const options = {
      method: "GET",
      url: "https://visual-crossing-weather.p.rapidapi.com/forecast",
      params: {
        contentType: "json",
        unitGroup: "metric",
        aggregateHours: "24",
        location: place,
        shortColumnNames: "0",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
        "X-RapidAPI-Host": "visual-crossing-weather.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };
    setLoading(true);
    try {
      const response = await axios.request(options);
      const data = Object.values(response.data.locations)[0];
      setLocation(data.name);
      setValues(data.values.slice(0, 9));
      setWeather(data.values[0]);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (place) {
      getWeatherDetails();
    }
  }, [place]);

  return (
    <StateContext.Provider value={{ weather, setPlace, values, location, loading, setWeather }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
