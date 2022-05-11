import React, { useEffect, useContext, useState } from "react";
import { WishListContext } from "../Context/productContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import "./favoriteProducts.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Link } from "react-router-dom";
import Paper from '@mui/material/Paper';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const FavoriteProducts = (props: any) => {

  const [wishList, setWishList] = useContext(WishListContext);
  const [isItemAlreadyInCart, setItemIncart] = useState<any>([]);
  const [open, setOpen] = React.useState(false);
  const [meassge, setMessage] = React.useState<any>("");

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  useEffect(() => {
    setItemIncart(
      wishList.filter((item: any) => item?.id == props?.product?.id)
    );
  }, [props?.product?.id, wishList]);

  const wishListItemHandler = (clickedItem: any) => {
    setOpen(false);
    setMessage(
      <>
        Item added successfully into wishlist!{" "}
        <Link to="/wish-list" style={{ color: "#ffff" }}>
          wish-list
        </Link>
      </>
    );
    setOpen(true);
    setWishList((prev: any) => {
      const isItemInWish = prev.find((item: any) => item.id === clickedItem.id);
      if (isItemInWish) {
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
    setOpen(false);
    setOpen(true);
    setMessage("Item removed successfully from wishlist !");
    setWishList((prev: any) =>
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

  return (
    <React.Fragment>
      {snackBar()}
      <div className="favorite-main-container">
        {isItemAlreadyInCart?.length != 0 ? (
          <FavoriteIcon
            className="favorite-icon-container"
            style={{ color: "#B2BEB5", height: "30px", width: "30px",cursor:'pointer' }}
            onClick={() => handleRemoveFromCart(props?.product?.id)}
          />
        ) : (
          <FavoriteBorderIcon
            className="favorite-icon-container"
            onClick={() => wishListItemHandler(props?.product)}
            style={{ height: "30px", width: "30px",cursor:'pointer' }}
          />
        )}
      </div>
    </React.Fragment>
  );
};
