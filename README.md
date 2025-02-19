# Weather App

This project is a full-stack application that allows users to fetch and display the average temperature for a city over a specified number of days. It consists of:

1. A **backend API** built with Node.js and Express.
2. A **frontend application** built with Next.js and Material-UI.

## Features

- Input a city and number of days via the frontend.
- Backend fetches historical weather data from a third-party API and computes the average temperature.
- Caching mechanism to optimize repeated requests.
- Responsive and user-friendly UI.

## Prerequisites

- **Node.js** (v16 or later)
- **npm** (v7 or later)
- A valid API key for the weather API (e.g., WeatherAPI or Open-Meteo)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/VinodShamraaj/WeatherApp.git
cd WeatherApp
```

### 2. Set Up the Backend

Follow the [backend setup instructions](./backend/README.md).

### 3. Set Up the Frontend

Follow the [frontend setup instructions](./frontend/README.md).

### 4. Run the Application

- Start the backend server (`npm run dev` in the `backend` folder).
- Start the frontend server (`npm run dev` in the `frontend` folder).
- Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

```
project/
├── backend/      # Backend API service
├── frontend/     # Frontend application
└── README.md     # Main project README
```

## Docker Instructions

### **Prerequisites**

Ensure Docker and Docker Compose are installed.

- [Install Docker](https://docs.docker.com/get-docker/)
- [Install Docker Compose](https://docs.docker.com/compose/install/)

### **Running with Docker**

1. Navigate to the project root where `docker-compose.yml` is located.
2. Update the backend api key in `docker-compose.yml`
3. Manually Build the Frontend (If Needed)
   If the frontend requires building before running, run:
   ```sh
   cd frontend
   npm install
   npm run build
   cd ..
   docker-compose up
   ```
4. Build and start the services:
   ```sh
   docker compose up --build
   ```
5. The application will be available at:
   - Backend: `http://localhost:5000`
   - Frontend: `http://localhost:3000`

### **Stopping Docker Services**

To stop the containers, run:

```sh
docker compose down
```

## Notes

- You can get an API key by signing-up at [OpenWeather](https://openweathermap.org/api)
