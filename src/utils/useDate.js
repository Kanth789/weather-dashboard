import { useEffect, useState } from "react";

export const useDate = () => {
  const locale = "en";
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000); 
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const day = date.toLocaleDateString(locale, { weekday: "long" });
  const today = `${day}, ${date.getDate()} ${date.toLocaleDateString(locale, {
    month: "long",
  })}`;

  const time = date.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
    second: "numeric", 
  });

  return {
    today,
    time,
  };
};
