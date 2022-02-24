import axios from "axios";
import React, {useState, useEffect} from 'react';

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "71f6779186cc32448b4c412eea65b982";

export const fetchweather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query,
      units: "metric",
      APPID: API_KEY,
    },
  });
  return data;
};
