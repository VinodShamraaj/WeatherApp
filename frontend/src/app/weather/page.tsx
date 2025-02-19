"use client";

import { useState } from "react";

import axios from "axios";
import { Box, CircularProgress, Typography } from "@mui/material";
import WeatherForm from "@/components/WeatherForm/WeatherForm";

import style from "./weather.module.css";
import { fetchWeatherData } from "@/services/weatherService";
import ResultModal from "@/components/ResultModal/ResultModal";

export default function WeatherPage() {
  const [city, setCity] = useState<string>("");
  const [days, setDays] = useState<number>(0);
  const [averageTemperature, setAverageTemperature] = useState<string | null>(
    null
  );

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string, days: number) => {
    setIsLoading(true);
    setError(null);
    setAverageTemperature(null);

    const result = await fetchWeatherData(city, days);

    if (result.error) {
      setIsLoading(false);
      setError(result.error);
    } else {
      setCity(city);
      setDays(days);
      setAverageTemperature(result);
      setIsLoading(false);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={style.pageWrapper}>
      <WeatherForm
        onSearch={handleSearch}
        isLoading={isLoading}
        error={error}
      />
      <ResultModal
        city={city}
        days={days}
        avgTemp={averageTemperature}
        isOpen={isModalOpen}
        handleClose={handleCloseModal}
      />
    </div>
  );
}
