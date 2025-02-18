const express = require("express");
const dotenv = require("dotenv");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const { ROUTES } = require("./src/constants/routerConstants");
const weatherRouter = require("./src/routers/weatherRouter");

const { errorMiddleware } = require("./src/middlewares/errorMiddleware");
const { loggingMiddleware } = require("./src/middlewares/loggingMiddleware");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Logging
app.use(loggingMiddleware);

// Swagger setup
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Weather API",
      version: "1.0.0",
      description: "API for fetching average weather data",
    },
  },
  apis: ROUTES,
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Use routers
app.use("/weather", weatherRouter);

// Root route
app.get("/", (req, res) => {
  res.send("Yay. The Weather API is running!");
});

// Error Handling
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
