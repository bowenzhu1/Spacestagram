import React from "react";
import axios from "axios";

// astronomy picture of the day
export type APOD = {
  title: string;
  date: string;
  explanation: string;
  media_type: "image" | "video";
  url: string;
  liked: boolean;
};

export async function getAPOD(startDate: string, endDate: string) {
  const API_KEY = process.env.REACT_APP_API_KEY;
  const params = `?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`;
  const API_URL = "https://api.nasa.gov/planetary/apod" + params;

  console.log(API_URL);
  const response = await axios.get(API_URL);
  const picture = response.data;
  return picture;
}
