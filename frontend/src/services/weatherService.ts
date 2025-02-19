import axiosInstance from "@/lib/axios";

export const fetchWeatherData = async (city: string, days: number) => {
  try {
    const response = await axiosInstance.get("/api/weather", {
      params: { city, days },
    });

    return response.data;
  } catch (error: any) {
    const errorMessage =
      error.response?.data?.error || "Failed to fetch weather data.";

    console.error(errorMessage);
    return { error: errorMessage };
  }
};
