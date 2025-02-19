import { FormEvent, Fragment, useState } from "react";

import { Button, Typography, CircularProgress } from "@mui/material";
import FormInput from "../FormInput/FormInput";

import style from "./WeatherForm.module.css";

type WeatherFormProps = {
  onSearch: (city: string, days: number) => void;
  isLoading: boolean;
  error: string | null;
};

export default function WeatherForm({
  onSearch,
  isLoading,
  error,
}: WeatherFormProps) {
  const [city, setCity] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const dayValue = days || "0";
    onSearch(city, parseInt(dayValue));
  };
  return (
    <form className={style.formWrapper} onSubmit={handleSubmit}>
      {isLoading ? (
        <CircularProgress />
      ) : (
        <Fragment>
          <Typography variant="h4" color="primary" textAlign={"center"}>
            Get Weather Info
          </Typography>

          <FormInput
            label="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            fullWidth
          />
          <FormInput
            label="Days"
            value={days}
            type="number"
            onChange={(e) => setDays(e.target.value)}
            fullWidth
          />
          <Button type="submit" variant="contained" color="primary">
            Get Weather
          </Button>
          {error && (
            <div>
              <Typography color="error">{error}</Typography>
            </div>
          )}
        </Fragment>
      )}
    </form>
  );
}
