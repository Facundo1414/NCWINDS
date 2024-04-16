import React from "react";
import { Grid } from "@mui/material";
import "./SeatSelection.css";
import SelectFlight from "../../components/molecules/selectFligth/SelectFlight";
import { Plane } from "../../components/organisms/plane/Plane";
import FligthInfo from "../../components/organisms/flightInfo/FligthInfo";

export default function SeatSelection() {
  return (
    <div>
      <Grid container justifyContent={"space-evenly"}>
        <SelectFlight />

        <Grid
          container
          component={"div"}
          marginY="3rem"
          padding="1rem"
          color="black"
        >
          <Grid item xs={12} md={3}>
            <FligthInfo></FligthInfo>
          </Grid>

          <Grid item xs={12} md={6}>
            <Plane />
          </Grid>

          <Grid item xs={12} md={3}></Grid>
        </Grid>
      </Grid>
    </div>
  );
}
