import { Button, Card, Typography } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";

const WeatherAPI = () => {
  const [weatherData, setWeatherData] = useState({
    precipitation: [],
    relativehumidity_2m: [],
    shortwave_radiation_instant: [],
    temperature_2m: [],
    time: [],
    uv_index: [],
    winddirection_10m: [],
    windspeed_10m: [],
  });
  const [city, setCity] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const currentDateRef = useRef(null);
  const dayRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);

  const geocodingFetch = async (event) => {
    try {
      event.preventDefault()
      const response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${city}&format=json`
      );
      const data = await response.json();
      setLatitude(data.results[0].latitude);
      setLongitude(data.results[0].longitude);
      fetchData();
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m,precipitation,windspeed_10m,winddirection_10m,uv_index,shortwave_radiation_instant&timezone=auto`
      );
      const data = await response.json();
      setWeatherData(data.hourly);
      console.log(data.hourly);
    } catch (error) {
      console.log("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    currentDateRef.current = new Date();
    dayRef.current = currentDateRef.current.getDate();
    monthRef.current = currentDateRef.current.getMonth() + 1;
    yearRef.current = currentDateRef.current.getFullYear();
  }, []);

  useEffect(() => {
    if (latitude !== 0 && longitude !== 0) {
      fetchData();
    }
  }, [latitude, longitude]);

  const currentHour = new Date().getHours();

  const TABLE_HEAD = ["Time", "Temperature", "WindSpeed", "Precipitation"];
  const TABLE_ROWS = weatherData.temperature_2m.map((_, index) => ({
    temperature: weatherData.temperature_2m[index],
    windSpeed: weatherData.windspeed_10m[index],
    precipitation: weatherData.precipitation[index],
    time: weatherData.time[index].slice(11, weatherData.time.length),
  }));
  console.log(weatherData.time[0]);

  return (
    <div className='flex flex-col justify-center items-center'>
      <form className='flex flex-col gap-5 my-10' onSubmit={geocodingFetch}>
        <Input
          label='City'
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        <Button size='md' type="submit">
          Check the Weather
        </Button>
      </form>
      <Card className='overflow-scroll border h-full w-11/12 mx-auto my-10 flex flex-col items-center'>
        <h2 className='text-xl my-3 font-semibold tracking-wide'>
          {latitude !== 0
            ? `${city} ${dayRef.current} / ${monthRef.current} / ${yearRef.current}`
            : ""}
        </h2>
        <table className='w-full min-w-max table-auto text-center '>
          <thead>
            <tr>
              {TABLE_HEAD.map(head => (
                <th
                  key={head}
                  className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'
                >
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal leading-none opacity-70'
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.slice(0, 24).map((row, index) => (              
              <tr
                key={index}
                className={`${
                  row.time.slice(11, 13) === 16 ? "bg-wattle-400 " : ""
                } even:bg-blue-gray-50/50`}
              >
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {row.time}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {row.temperature}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {row.windSpeed}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography
                    variant='small'
                    color='blue-gray'
                    className='font-normal'
                  >
                    {row.precipitation}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};

export default WeatherAPI;
