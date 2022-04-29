import React, { FC, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartListContext } from "../Context/productContext";
import { Calculate } from "../../utilities/utility";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../Cart/cart.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Link } from "react-router-dom";
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Product: FC<any> = (props: any) => {
  const [cartList, setCartList] = useContext(CartListContext);
  const [open, setOpen] = React.useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const addCartItemhandler = (clickedItem: any) => {
    setOpen(false);
    setOpen(true);
    setCartList((prev: any) => {
      const isItemInCart = prev.find((item: any) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item: any) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };
  const snackBar = () => {
    return (
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar
          open={open}
          autoHideDuration={3000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Item added successfully into{" "}
            <Link to="/cart" style={{ color: "#ffff" }}>
              Cart
            </Link>
          </Alert>
        </Snackbar>
      </Stack>
    );
  };
  return (
    <Card sx={{ maxWidth: 345 }}>
      {snackBar()}
      <Link
        to={{
          pathname: "/products/" + props?.product?.id,
        }}
        style={{textDecoration:'none',color: "rgba(0, 0, 0, 0.87)"}}
      >
        <CardMedia
          component="img"
          height="170"
          image={props?.product?.image}
          alt="green iguana"
        />
     
      <CardContent style={{ padding: "7px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {props?.product?.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          className="amount-sub-container"
        >
          Price: <CurrencyRupeeIcon fontSize="small" />{" "}
          {props?.product?.amount
            ? Calculate(props?.product?.amount, Number(props?.product?.price))
            : props?.product?.price}{" "}
          INR
        </Typography>
      </CardContent>
      <CardActions
        className="main-card-action-container"
        // onClick={() => addCartItemhandler(props?.product)}
      >
        <Button size="small" style={{ color: "#ffff" }}>
          {/* Add to cart <AddShoppingCartIcon /> */}
          Product details
        </Button>
      </CardActions>
      </Link>
    </Card>
  );
};
export default Product;
