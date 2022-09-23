import React from "react";
import {
  AppBar,
  Toolbar,
  CssBaseline,
  Link,
  Typography,
  Grid,
} from "@mui/material";

function Navbar() {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="sticky"
        style={{
          backdropFilter: "blur(20px)",
          background: "rgba(255, 255, 255, 0.7)",
          boxShadow: "none",
          color: "rgb(66, 66, 66)",
          borderStyle: "solid",
          borderColor: "rgb(245, 245, 245)",
          borderWidth: "0px 0px thin",
          transition: "top 195ms cubic-bezier(0.4, 0, 1, 1) 0ms",
        }}
      >
        <Toolbar>
          <Grid
            container
            spacing={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Grid item>
              <Link href="#home" underline="none">
                <Typography variant="h6" align="center" color="#333">
                  Home
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#about" underline="none">
                <Typography variant="h6" align="center" color="#333">
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="#contact" underline="none">
                <Typography variant="h6" align="center" color="#333">
                  Contact
                </Typography>
              </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
