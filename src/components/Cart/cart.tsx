import { Button, Grid } from "@mui/material";
import React, { FC, useContext } from "react";
import { CartListContext, getSessionData } from "../Context/productContext";
import CartItem from "./cartItem";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { getTotalItems } from "../../utilities/utility";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Cart: FC<any> = () => {
  const [cartList, setCartList] = useContext(CartListContext);
  const [open, setOpen] = React.useState(false);
  const [isOrderOpen, setOrderOpen] = React.useState<boolean>(false);
  const [meassge, setMessage] = React.useState<string>("");
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
    setMessage("Item added successfully into cart !");
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
  const handleRemoveFromCart = (id: number) => {
    setMessage("Item removed successfully from cart !");
    setOpen(true);
    setCartList((prev: any) =>
      prev.reduce((acc: any, item: any) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [])
    );
  };
  const getTotalItemsAmount = (cartList: any) =>
    cartList.reduce(
      (acc: any, item: any) => acc + item?.price * item?.amount,
      0
    );
  const classes = {
    gridItem: {
      paddingLeft: "0px",
    },
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
            {meassge}
          </Alert>
        </Snackbar>
      </Stack>
    );
  };

  const onConfirm = () => {
    setCartList([]);
    setOrderOpen(false);
  };
  return (
    <React.Fragment>
      <div style={{ marginTop: "80px" }}>
        <Dialog
          open={isOrderOpen}
          onClose={() => setOrderOpen(false)}
          aria-labelledby="are you sure to delete"
        >
          <DialogTitle id="confirm-dialog">
            <div className="cart-heading-text">Order Summary</div>
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <>
                <div className="cart-heading-text" style={{ fontSize: "19px" }}>
                  Total Items : {getTotalItems(cartList)}
                </div>
                <div className="cart-heading-text" style={{ fontSize: "19px" }}>
                  Total Amount: <CurrencyRupeeIcon fontSize="small" />
                  {getTotalItemsAmount(cartList)} INR
                </div>
                <div className="cart-heading-text" style={{ fontSize: "19px" }}>
                  Email : {getSessionData()?.email}
                </div>
                <div className="cart-heading-text" style={{ fontSize: "19px" }}>
                  Please confirm
                </div>
              </>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => setOrderOpen(false)}
              variant="outlined"
              color="secondary"
              style={{ background: "#ffff" }}
            >
              Cancel
            </Button>
            <Link to="/orderplaced" className="linkTextDirection">
              <Button
                onClick={() => onConfirm()}
                color="primary"
                variant="contained"
                autoFocus
                style={{ margin: "5px" }}
              >
                Confirm
              </Button>
            </Link>
          </DialogActions>
        </Dialog>
        {snackBar()}
        {cartList?.length == 0 ? (
          <>
            <p className="cart-heading-text">CART IS EMPTY</p>
            <Link to="/" className="linkTextDirection">
              <Button variant="contained">Go to Products</Button>
            </Link>
          </>
        ) : (
          <>
            <div className="cart-heading-text">YOUR CART</div>
            <br />
            <div className="cart-heading-text">Checkout</div>
            <div className="cart-heading-text">
              Total Items : {getTotalItems(cartList)}
            </div>
          </>
        )}
        <Grid
          container
          spacing={3}
          marginLeft="0px"
          margin={"5px"}
          width={"99%"}
        >
          {cartList.map((product: any) => {
            return (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={4}
                style={classes.gridItem}
              >
                <CartItem
                  product={product}
                  handleRemoveFromCart={handleRemoveFromCart}
                  addCartItemhandler={addCartItemhandler}
                />
              </Grid>
            );
          })}
        </Grid>
        {Boolean(cartList.length) && (
          <p className="totalBottomContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardContent style={{ padding: "7px" }}>
                <Typography gutterBottom variant="h5" component="div">
                  Total Amount
                </Typography>
                <Typography variant="body2" className="amount-sub-container">
                  <div className="cart-heading-text">
                    Total: <CurrencyRupeeIcon fontSize="small" />
                    {getTotalItemsAmount(cartList)} INR
                  </div>
                </Typography>
              </CardContent>
              <CardActions className="totalBottomContainer">
                <Button variant="contained" onClick={() => setOrderOpen(true)}>
                  Place order
                </Button>
              </CardActions>
            </Card>
          </p>
        )}
      </div>
    </React.Fragment>
  );
};
export default Cart;
