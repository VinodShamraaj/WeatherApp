import { Button, Link, Typography } from "@mui/material";

import CloudIcon from "@/common/icons/CloudIcon";
import routes from "@/common/constants/routeConstants";

import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <CloudIcon fillColor="#a1aace" />
      <Typography className={style.appTitle} variant="h4">
        <Link href={routes.DEFAULT} underline="none" color="secondary">
          Weather App
        </Link>
      </Typography>
      <div className={style.navWrapper}>
        <Button href={routes.DEFAULT}>Home</Button>
        <Button href={routes.WEATHER}>Weather</Button>
      </div>
    </div>
  );
}
