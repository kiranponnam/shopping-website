import React, { useEffect, useState } from "react";
import { getSessionData } from "../Context/productContext";
import LogoutIcon from "@mui/icons-material/Logout";
import { Navigate } from "react-router-dom";
import { Avatar, Tooltip } from "@mui/material";
import ConfirmDialog from "../../utilities/ConfirmDialog/confirmDialog";

const UserDetails = (props: any) => {
  const [isLogoutProfile, setLogoutProfile] = useState<boolean>(false);
  
  const onConfirm = (event: any) => {
    if (event === "confirm") {
      sessionStorage.removeItem("userData");
      <Navigate to="/" />;
      window.location?.reload();
    }
    setLogoutProfile(false);
  };
  return (
    <React.Fragment>
      <div style={{ display: "flex", alignItems: "center", cursor: "pointer" }}>
        <Tooltip title={getSessionData()?.email}>
          <Avatar style={{ backgroundColor: "#11AC0E", margin: "10px" }}>
            {getSessionData()?.email?.charAt(0)?.toUpperCase()}
          </Avatar>
        </Tooltip>
        <LogoutIcon onClick={() => setLogoutProfile(true)} />
      </div>
         <ConfirmDialog
        open={isLogoutProfile}
        onConfirm={onConfirm}
        title="Confirmation"
        dialogContentText={
          <>
            Are you sure you want to logout? <br /> Please confirm
          </>
        }
      />
    </React.Fragment>
  );
};
export default UserDetails;
