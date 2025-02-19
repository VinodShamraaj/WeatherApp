import { Button, Typography } from "@mui/material";

import style from "./page.module.css";

export default function HomePage() {
  return (
    <main className={style.mainWrapper}>
      <Typography variant="h3">Welcome to the Weather App</Typography>
      <br />
      <Typography>
        Go to the weather page to get the average temperature.
      </Typography>
      <Button className={style.navButton}>Go To Weather</Button>
    </main>
  );
}
