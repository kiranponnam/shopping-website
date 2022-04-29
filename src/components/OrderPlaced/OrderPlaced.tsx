import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export const OrderPlaced = (props: any) => {
  return (
    <React.Fragment>
      <div style={{ marginTop: "85px", marginBottom: "50px" }}>
        <CheckCircleIcon style={{ fontSize: "125px", color: "#1976d2" }} />
        <h1> Order Placed Successfully! </h1>
        <p> We've sent you an email with the Order details. </p>
        <p> shop more products click on below button. </p>
        <Link to="/" className="linkTextDirection">
          <Button variant="contained">Go to Products</Button>
        </Link>
      </div>
    </React.Fragment>
  );
};
