import React from "react";
import { Container } from "@mui/system";
import Grid from "@mui/material/Grid";
import { Button, Typography } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IMG from '../img/profile.png'
import CardMedia from "@mui/material/CardMedia";
import '../styles/img.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#9e9e9e",
    },
    secondary: {
      main: "#11cb5f",
    },
  },
});

export default function profile() {
  return (
    <>
      <Container maxWidth="xl" sx={{ display: "flex", height: "150px" }}>
        <Grid container xs={12} justifyContent="center" mt={10}>
          <Divider>Profile</Divider>
        </Grid>
      </Container>
      <Container maxWidth="xl">
        <Grid container xs={12} mt={3} justifyContent="space-between">
            <Grid item xs={12} mt={2}>
                <Typography>Vards:test</Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Typography>Uzvards:test</Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Typography>Tiesibas:Admin</Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </Typography>
            </Grid>
            <Grid item xs={12} mt={2}>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
            </Grid>
            <Grid item xs={12}>
            <CardMedia
              className="img"
              component="img"
              image={IMG}
              alt="Error"
            />
            </Grid>
        </Grid>
        <ThemeProvider theme={theme}>
          <Grid container xs={12}>
            <Grid item xs={12} md={1} mt={3}>
              <Button variant="contained" color="secondary" fullWidth>
                Edit
              </Button>
            </Grid>
          </Grid>
        </ThemeProvider>
      </Container>
    </>
  );
}
