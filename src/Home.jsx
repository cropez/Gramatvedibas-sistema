import React from "react";
import { Container } from "@mui/system";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";

const Home = props => {
  return (
    <Container>
        <Grid>
            <Typography mt={10} variant="h5" textAlign="center">Lorem ipsum</Typography>
            <Typography mt={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

            </Typography>
        </Grid>

    </Container>


  )
};

export default Home;