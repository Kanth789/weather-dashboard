import sun from "../icons/sun.png";
import cloud from "../icons/cloud.png";
import fog from "../icons/fog.png";
import rain from "../icons/rain.png";
import snow from "../icons/snow.png";
import storm from "../icons/storm.png";
import wind from "../icons/windy.png";
import overcast from '../icons/overcast.png'

import Clear from '../images/Clear.jpg'
import Fog from '../images/fog.png'
import Cloudy from '../images/Cloudy.jpg'
import Rainy from '../images/Rainy.jpg'
import Snow from '../images/snow.jpg'
import Stormy from '../images/Stormy.jpg'
import Sunny from '../images/Sunny.jpg'

export const getIcon = (title) => {
  if(title){
  if (title.toLowerCase().includes("cloud")) {
    return cloud;
  } else if (title.toLowerCase().includes("rain")) {
    return rain;
  } else if (title.toLowerCase().includes("clear")) {
    return sun;
  } else if (title.toLowerCase().includes("thunder")) {
    return storm;
  } else if (title.toLowerCase().includes("fog")) {
    return fog;
  } else if (title.toLowerCase().includes("snow")) {
    return snow;
  } else if (title.toLowerCase().includes("wind")) {
    return wind;
  }
  else if (title.toLowerCase().includes("overcast")) {
    return overcast;
  }
}else{
  return wind
}
};


export const getBackGroundImage = (value) =>{
  if (value) {
    if (value.toLowerCase().includes('clear')) {
      return Clear
    } else if (value.toLowerCase().includes('cloud')) {
      return Cloudy
    } else if (value.toLowerCase().includes('rain') || value.toLowerCase().includes('shower')) {
      return Rainy
    } else if (value.toLowerCase().includes('snow')) {
      return Snow
    } else if (value.toLowerCase().includes('fog')) {
      return Fog
    } else if (value.toLowerCase().includes('thunder') || value.toLowerCase().includes('storm')) {
      return Stormy
    }
    else if (value.toLowerCase().includes("overcast")) {
      return Sunny;
    }
  }else{
    return Cloudy
  }
}