import React, { FC, useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import "./nav.css";
import Badge from "@mui/material/Badge";
import {
  CartListContext,
  getSessionData,
} from "../Context/productContext";
import UserDetails from "../UserDetails/UserDetails";

const NavBar: FC<any> = () => {
  const location = useLocation();
  const [cartList] = useContext(CartListContext);
  const getTotalItems = (items: any) =>
    items.reduce((acc: any, item: any) => acc + item.amount, 0);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }} className="headerFixed">
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                className={
                  location?.pathname === "/"
                    ? "headerbtnActive"
                    : "mainHeaderContainer"
                }
              >
                Products
              </Link>
            </Typography>
            {/* <AsyncAutoComplete/> */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link
                to="/cart"
                className={
                  location?.pathname === "/cart"
                    ? "headerbtnActive"
                    : "mainHeaderContainer"
                }
              >
                <Badge badgeContent={getTotalItems(cartList)} color="success">
                  Cart
                </Badge>
              </Link>
            </Typography>
            {getSessionData()?.email ? (
              <UserDetails />
            ) : (
              <Link
                to="/login"
                className={
                  location?.pathname === "/login"
                    ? "headerbtnActive"
                    : "mainHeaderContainer"
                }
              >
                <Button color="inherit">Login</Button>
              </Link>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  );
};
export default NavBar;
