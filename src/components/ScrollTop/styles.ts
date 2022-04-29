import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toTop: {
        zIndex:2,
        position:"fixed",
        bottom:"2vh",
        backgroundColor:"#DCDCDC",
        color:"black",
        right:"3%",
        "$:hover, &.Mui-focusVisible":{
            transition:"0.3s",
            color:"397BA6",
            backgroundColor:"#DCDCDC"
        }
    },
  })
);
