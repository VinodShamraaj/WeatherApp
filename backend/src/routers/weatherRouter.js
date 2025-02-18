const express = require("express");
const { fetchWeather } = require("../controllers/weatherController");

const router = express.Router();

/**
 * @swagger
 * /weather/average:
 *   get:
 *     summary: Get average weather data for a city in the past X days
 *     parameters:
 *       - in: query
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: The city name
 *       - in: query
 *         name: days
 *         schema:
 *           type: integer
 *         required: true
 *         description: Number of days
 *     responses:
 *       200:
 *         description: Average weather data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 city:
 *                   type: string
 *                 days:
 *                   type: integer
 *                 averageTemperature:
 *                   type: number
 *       400:
 *         description: Missing required parameters or invalid parameters
 *       500:
 *         description: Failed to fetch weather data
 */
router.get("/average", async (req, res, next) => {
  const { city, days } = req.query;

  // Error Handling
  if (!city || !days) {
    return res
      .status(400)
      .json({ message: "City and days are required parameters" });
  }

  if (days <= 0) {
    return res
      .status(400)
      .json({ message: "Days have to be a positive integer" });
  }

  try {
    const weatherData = await fetchWeather(city, days);
    res.json(weatherData);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
