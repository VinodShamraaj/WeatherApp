import { Button, Icon, Typography } from "@mui/material";
import CloudIcon from "@/common/icons/CloudIcon";

import style from "./Header.module.css";

export default function Header() {
  return (
    <div className={style.header}>
      <CloudIcon fillColor="#a1aace" />
      <Typography className={style.appTitle} variant="h4">
        Weather App
      </Typography>
      <div className={style.navWrapper}>
        <Button>Home</Button>
        <Button>Weather</Button>
      </div>
    </div>
  );
}
