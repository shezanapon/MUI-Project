import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import MultipleSelect from "./MultipleSelect";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";

const Itm = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "left",
  color: theme.palette.text.secondary,
}));
const Head = () => {
  return (
    <Box sx={{ padding: "60px 120px 20px 120px" }}>
      <Box
        sx={{
          flexGrow: 1,
          padding: "12px 12px 12px 12px",
          boxShadow: "5px 10px 18px #888888",
        }}
      >
        <MultipleSelect></MultipleSelect>
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h4" color={"#ef6c00"}>
              Event Name: Japan vs Australia
            </Typography>
            <Typography>
              <b>
                Event Date:April 15,2023
                <br />
                Event Location: Adelaide Oval,Adelaide
              </b>
            </Typography>
          </Grid>
          <Grid xs={2}>
            <Itm>
              <Typography color={"blue"} variant="p">
                <b>Number of Tickets Allocated </b>
                <Typography variant="h4" color={"black"}>
                  850
                </Typography>
              </Typography>
            </Itm>
          </Grid>
          <Grid xs={2}>
            <Itm>
              <Typography variant="p" color={"blue"}>
                <b>Tickets Assigned </b>
                <Typography variant="h4" color={"black"}>
                  150
                </Typography>
              </Typography>
            </Itm>
          </Grid>
          <Grid xs={2}>
            <Itm>
              <Typography color={"blue"} variant="p">
                <b>Available</b>
                <Typography variant="h4" color={"black"}>
                  700
                </Typography>
              </Typography>
            </Itm>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Head;
