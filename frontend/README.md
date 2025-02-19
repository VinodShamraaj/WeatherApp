# Weather App Frontend

This is the frontend application for the Weather App project. It allows users to input a city and a number of days, fetch the average temperature from the backend API, and display the results.

## Features

- Input form for city and number of days.
- Displays the average temperature for the selected city and days.
- Graceful handling of loading states and errors.
- Responsive design using Material-UI.

## Tech Stack

- **Next.js** (React framework)
- **Material-UI (MUI)** for UI components
- **Axios** for HTTP requests

## Prerequisites

- **Node.js** (v16 or later)
- **npm** (v7 or later)
- Backend server running (check [backend setup](../backend/README.md)).

## Setup Instructions

1. Navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root of the `frontend` folder:

   ```env
   BASE_API_URL=http://localhost:5000/api
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Access the application at [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
frontend/
├── src/
│   ├── app/           # Pages using the Next.js app router
│   │   ├── api/       # API routes
│   │   └── weather/   # Weather page
│   ├── common
│   │   ├── constants  # Commonly used constants
│   │   └── icons      # Commonly used icons
│   ├── components/    # Reusable UI components
│   ├── lib/           # Axios instance
│   ├── services/      # API handling
└── .env               # Environment variables
```

## Scripts

- `npm run dev`: Run the development server.
- `npm run build`: Build the production application.
- `npm start`: Start the production server.
- `npm run lint`: Lint the codebase.

## Notes

- The frontend assumes the backend is running on `http://localhost:5000`.
- Update the `.env` file if the backend is deployed to another URL.
