import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  Typography,
} from "@mui/material";
import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import MultipleSelect from "./Select";

const Left = () => {
  return (
    <>
      <Typography variant="subtitle1">
        <b>Primary Contact:</b>
      </Typography>
      <Typography variant="h5" color={"#ff6f00"}>
        <b>Elizabeth Lopez</b>
      </Typography>
      <Typography variant="subtitle2">
        <b>
          Email: elizabeth.lopez@gmail.com
          <br />
          Contact Number: 04XXX XXX XXX
        </b>
      </Typography>
      <br />
      <br />
      <br />
      <Typography variant="h6" color={"#2e7d32"}>
        <b>Invited Guests</b>
      </Typography>
      <Box>
        <TableContainer
          component={Paper}
          sx={{ maxWidth: "800px", marginTop: "10px", marginBottom: "20px" }}
        >
          <Table>
            <TableBody>
              <TableRow sx={{ bgcolor: "#ff6f00" }}>
                <TableCell component="th" scope="row" sx={{ color: "white" }}>
                  NAME
                </TableCell>
                <TableCell align="center" sx={{ color: "white" }}>
                  Seat Number
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  <b>Elizabeth Lopez</b>
                </TableCell>
                <TableCell align="center">
                  <MultipleSelect></MultipleSelect>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Matthew Martinez</b>
                </TableCell>
                <TableCell align="center">
                  <MultipleSelect></MultipleSelect>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Elizabeth Hall</b>
                </TableCell>
                <TableCell align="center">
                  <MultipleSelect></MultipleSelect>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <b>Maria White</b>
                </TableCell>
                <TableCell align="center">
                  <MultipleSelect></MultipleSelect>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Button
            sx={{
              bgcolor: "#00b8d4",
              color: "white",
            }}
          >
            Allocate Seat
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default Left;
