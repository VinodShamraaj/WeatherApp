import axiosInstance from "@/lib/axios";
import { AxiosError } from "axios";

export const fetchWeatherData = async (city: string, days: number) => {
  try {
    const response = await axiosInstance.get("/api/weather", {
      params: { city, days },
    });

    return response.data;
  } catch (error: unknown) {
    // Log error From server
    if (error instanceof AxiosError) {
      const errorMessage =
        error.response?.data.error || "Failed to fetch weather data.";
      console.error(error.message);
      return { error: errorMessage };
    } else {
      return { error: "Failed to fetch weather data." };
    }
  }
};
