import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

const Right = () => {
  const datas = [456, 557, 879, 1011, 689, 444, 517, 890, 1001, 100];
  const patas = [555, 789, 800, 1012, 688, 417, 518, 880, 1021, 101];
  const qatas = [457, 558, 871, 1013, 687, 458, 559, 891, 1022, 102];
  const ratas = [418, 519, 872, 1014, 686, 459, 560, 892, 1023, 103];
  const satas = [419, 510, 873, 1015, 615, 460, 511, 893, 1033, 104];
  const tatas = [410, 561, 874, 1016, 684, 461, 512, 894, 1044, 105];
  const batas = [411, 563, 875, 1017, 685, 462, 513, 895, 1045, 106];
  const catas = [412, 564, 876, 1018, 686, 463, 514, 896, 1046, 107];

  const [cursor, setCursor] = useState("crosshair");
  const [active, setActive] = useState("");
  const changeCursor = (data) => {
    console.log(data);
    setActive(data);
    // setActive(!active);
    // setCursor((prevState) => {
    //   if (prevState === "crosshair") {
    //     return "pointer";
    //   }
    //   return "crosshair";
    // });
  };

  return (
    <Box
      sx={{
        width: "500px",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        padding: "20px 100px 100px 40px ",
      }}
    >
      <Typography variant="h4" color={"#ff6f00"} align="center">
        <b>Venue Name: Adelaide Oval</b>
      </Typography>
      <br />
      <br />
      <Typography variant="h6" marginBottom={"20px"}>
        <b>VIP Gallary</b>
      </Typography>
      <Stack direction="row" spacing={1} marginBottom={"10px"}>
        {datas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            key={index}
            label={data}
          ></Chip>
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        {patas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            key={index}
            label={data}
          >
            {console.log(data, active, data === active)}
          </Chip>
        ))}
      </Stack>
      <Typography variant="h6" marginBottom={"20px"} marginTop={"25px"}>
        <b>North Gallary</b>
      </Typography>
      <Stack direction="row" spacing={1} marginBottom={"10px"}>
        {qatas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            label={data}
            key={index}
          ></Chip>
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        {ratas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            label={data}
            key={index}
          ></Chip>
        ))}
      </Stack>
      <Typography variant="h6" marginBottom={"20px"} marginTop={"25px"}>
        <b>South Gallary</b>
      </Typography>
      <Stack direction="row" spacing={1} marginBottom={"10px"}>
        {satas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            label={data}
            key={index}
          ></Chip>
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        {tatas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            label={data}
            key={index}
          ></Chip>
        ))}
      </Stack>
      <Typography variant="h6" marginBottom={"20px"} marginTop={"25px"}>
        <b>East Gallary</b>
      </Typography>
      <Stack direction="row" spacing={1} marginBottom={"10px"}>
        {batas.map((data) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            label={data}
          ></Chip>
        ))}
      </Stack>
      <Stack direction="row" spacing={1}>
        {catas.map((data, index) => (
          <Chip
            onClick={() => changeCursor(data)}
            sx={{ backgroundColor: `${data === active ? "#ef6c00" : ""}` }}
            key={index}
            label={data}
          ></Chip>
        ))}
      </Stack>
    </Box>
  );
};

export default Right;
