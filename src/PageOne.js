import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import "./App.css";
import * as React from "react";
import Left from "./components/Left";
import Right from "./components/Right";
import image from "./pic.jpg";
import { Button } from "@mui/material";
import { Navigate } from "react-router-dom";
import { useState } from "react";

function PageOne() {
  const [goToAnother, setGoToAnother] = useState(false);
  if (goToAnother) {
    return <Navigate to="/first" />;
  }
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid lg={6} xs={12} sx={{ padding: "40px 60px 60px 80px" }}>
          <Left></Left>
          <Button
            onClick={() => {
              setGoToAnother(true);
            }}
            variant="contained"
            sx={{ marginTop: "11px" }}
          >
            Previous Page
          </Button>
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            padding: "40px 0px 60px 60px",
          }}
        >
          <Right></Right>
        </Grid>
      </Grid>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}
      >
        <img src={image} alt=""></img>
      </Box>
    </Box>
  );
}

export default PageOne;
