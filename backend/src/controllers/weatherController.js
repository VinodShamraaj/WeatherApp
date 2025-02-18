const axios = require("axios");
const { customToFixed } = require("../utils/customToFixed");

// In-memory caching
const cache = new Map();

const fetchWeather = async (city, days) => {
  const { API_KEY, BASE_URL } = process.env;
  const cacheKey = `${city}-${days}`;

  if (cache.has(cacheKey)) {
    return cache.get(cacheKey);
  }

  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        cnt: days,
        appid: API_KEY,
        units: "metric", // Get temperature in Celsius
      },
    });

    // Massage the data to receive array of temperatures to calculate avg temperature
    const temperatureList = response.data.list.map((item) => item.main.temp);
    const temperatureSum = temperatureList.reduce((sum, temp) => sum + temp, 0);

    const avgTemp = temperatureSum / temperatureList.length;
    const avgTempRounded = customToFixed(avgTemp);

    // String manipulation to add unit of measurement
    const avgTempString = `${avgTempRounded} \u00B0C`;

    return {
      city,
      days,
      avgTempString,
    };
  } catch (error) {
    console.error("Error fetching weather data: ", error.message);
    throw new Error("Failed to fetch weather data");
  }
};

module.exports = { fetchWeather };
