import { Button, Typography } from "@mui/material";

import style from "./page.module.css";
import routes from "@/common/constants/routeConstants";

// Setup Homepage metadata
export const metadata = {
  title: "Homepage | Weather App",
  description:
    "Check the average temperature of a city over the past few days.",
  keywords: "weather, temperature, forecast, city",
};

export default function HomePage() {
  return (
    <main className={style.mainWrapper}>
      <Typography variant="h3" color="secondary">
        Welcome to the Weather App
      </Typography>
      <br />
      <Typography color="secondary">
        Go to the weather page to get the average temperature.
      </Typography>
      <Button href={routes.WEATHER} className={style.navButton}>
        Go To Weather
      </Button>
    </main>
  );
}
