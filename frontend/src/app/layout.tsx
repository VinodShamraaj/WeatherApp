"use client";

import { ReactNode } from "react";
import {
  CssBaseline,
  GlobalStyles,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import "./globals.css";
import Header from "@/components/Header/Header";

// Setup Theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#a1aace",
    },
    secondary: {
      main: "#ededed",
    },
  },
  typography: {
    fontFamily: "Poppins",
  },
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Google Font Import */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: {
                backgroundColor: "#32343d",
                margin: 0,
                padding: 0,
                height: "100%",
              },
            }}
          />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
