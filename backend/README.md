# Weather App API (Backend)

This is the backend service for the Weather App project. It provides an API to fetch weather data for a specified city and calculates the average temperature over a given number of days.

## Features

- Fetches weather data from a third-party API.
- Calculates the average temperature for the past X days.
- Caches responses to reduce redundant API calls and improve performance.
- Implements error handling for missing or invalid parameters.
- Provides API documentation with Swagger.

## Tech Stack

- **Node.js** with **Express**
- **Axios** for HTTP requests
- **Swagger** for API documentation

## Prerequisites

- **Node.js** (v16 or later)
- **npm** (v7 or later)
- A valid API key for the weather API (e.g., WeatherAPI or Open-Meteo)

## Setup Instructions

1. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the `backend` folder:

   ```env
   WEATHER_API_KEY=your_api_key_here
   BASE_URL=https://api.openweathermap.org/data/2.5
   PORT=5000
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Access the Swagger documentation at [http://localhost:5000/api](http://localhost:5000/docs).

## API Endpoints

### GET `/api/weather`

Fetch the average temperature for a given city and number of days.

**Query Parameters:**

- `city` (string): Name of the city.
- `days` (number): Number of days to fetch the data for.

**Example Request:**

```http
GET /api/weather?city=London&days=3
```

**Example Response:**

```json
{
  "city": "Kuala Lumpur",
  "days": 3,
  "averageTemperature": "25.6 °C"
}
```

## Scripts

- `npm run dev`: Run the server in development mode.
- `npm start`: Run the server in production mode.
- `npm run lint`: Lint the codebase.

## Notes

- Ensure your weather API key is valid and allows access to historical weather data.
