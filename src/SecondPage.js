import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Head from "./components1/Head";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import image from "./pic.jpg";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

export default function SecondPage() {
  const [goToAnother, setGoToAnother] = useState(false);
  if (goToAnother) {
    return <Navigate to="/second" />;
  }
  return (
    <>
      <Head></Head>
      <Box sx={{ padding: "0px 120px 60px 120px" }}>
        <Typography
          variant="h5"
          sx={{ color: "olive", marginTop: "40px", marginBottom: "10px" }}
        >
          Invited Guests
        </Typography>
        <TableContainer sx={{}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ bgcolor: "#ef6c00" }}>
                <TableCell sx={{ color: "#f5f5f5" }}>NAME</TableCell>
                <TableCell align="left" sx={{ color: "#f5f5f5" }}>
                  EMAIL
                </TableCell>
                <TableCell align="left" sx={{ color: "#f5f5f5" }}>
                  Tickets Requested
                </TableCell>
                <TableCell align="left" sx={{ color: "#f5f5f5" }}>
                  Tickets Allocated
                </TableCell>
                <TableCell align="left" sx={{ color: "#f5f5f5" }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">{row.calories}</TableCell>
                  <TableCell align="left">{row.fat}</TableCell>
                  <TableCell align="left">{row.carbs}</TableCell>
                  <TableCell align="right">
                    <Button
                      sx={{
                        bgcolor: "#26c6da",
                        color: "white",
                        marginRight: "40px",
                      }}
                    >
                      Allocate Ticket
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "20px",
          }}
        >
          <img style={{ paddingTop: "60px" }} src={image} alt=""></img>
        </Box>
        <Button
          onClick={() => {
            setGoToAnother(true);
          }}
          variant="contained"
          sx={{ marginTop: "10px" }}
        >
          Next Page
        </Button>
      </Box>
    </>
  );
}
