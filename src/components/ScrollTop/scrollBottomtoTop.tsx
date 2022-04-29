import React, { FC, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useStyles } from "./styles";
export const ScrollBottomToTop: FC<any> = ({ showBelow }) => {
  const clasess = useStyles();
  const [show, setShow] = React.useState<any>(showBelow ? false : true);
  const handScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };
  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handScroll);
      return () => window.removeEventListener("scroll", handScroll);
    }
  });
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      {show && (
        <IconButton onClick={handleClick} className={clasess.toTop}>
          <ExpandLessIcon />
        </IconButton>
      )}
    </React.Fragment>
  );
};
