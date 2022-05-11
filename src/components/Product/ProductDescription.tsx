import { CircularProgress, Grid } from "@mui/material";
import React, { FC, useContext, useState, useEffect } from "react";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { CartListContext, ProductListContext } from "../Context/productContext";
import { Calculate } from "../../utilities/utility";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../Cart/cart.css";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Link } from "react-router-dom";
import "./products.css";
import axios from "axios";
import Backbtn from "../../assests/backbtn.svg";
import { FavoriteProducts } from "../FavoriteProducts";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
export const ProductDescription = (props: any) => {
  const [cartList, setCartList] = useContext(CartListContext);
  const [open, setOpen] = React.useState(false);
  const [productList, setProductList] = useContext(ProductListContext);
  const [product, setProduct] = useState<any>([]);
  const [isloading, setLoading] = useState<boolean>(false);
  const [isItemAlreadyInCart, setItemIncart] = useState<any>([]);

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
  const Id = window.location?.pathname?.replace("/products/", "");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://626045a592df0bc0f34244de.mockapi.io/api/v1/products/${Id}`)
      .then((response: any) => {
        if (response?.data) {
          setProduct(response?.data);
          setLoading(false);
        }
      });
  }, [Id]);

  useEffect(() => {
    setItemIncart(cartList.filter((item: any) => item?.id == Id));
  }, [Id, cartList]);

  return (
    <React.Fragment>
      <div style={{ marginTop: "75px", marginBottom: "60px" }}>
        <div className="productNameTopContainer">
          <Link to="/">
            <img src={Backbtn} alt="img" style={{ marginLeft: "30px" }} />
          </Link>
          <h4 className="productdesTopContainer">Product Description</h4>
        </div>
        {isloading ? (
          <div className="globalLoaderContainer">
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={2} justifyContent={"center"}>
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={6}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              marginTop={"25px"}
            >
              <div style={{ margin: "auto", width: "80%" }}>
                {snackBar()}
                <div style={{ display: "flex", flexDirection: "row-reverse" }}>
                  <FavoriteProducts product={product} />
                </div>
                <img
                  src={product?.image}
                  className="productImageContainer"
                  loading="lazy"
                  alt={product?.name}
                />
              </div>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sm={12}
              lg={6}
              display={"flex"}
              flexDirection={"column"}
              justifyContent={"center"}
            >
              <h2 style={{ margin: "5px" }}>{product?.name}</h2>
              {/* <h3 className="brand">puma</h3> */}
              <div>
                <h3
                  className="amount-sub-container"
                  style={{ alignItems: "self-end" }}
                >
                  Price: <CurrencyRupeeIcon fontSize="small" />{" "}
                  {props?.product?.amount
                    ? Calculate(product?.amount, Number(product?.price))
                    : product?.price}{" "}
                  INR
                </h3>
                <h3>Description</h3>
                <p className="product-description">
                  {product?.productDescription}.
                </p>
              </div>
              {isItemAlreadyInCart?.length != 0 ? (
                <Link to="/cart" className="checkoutLink">
                  <CardActions
                    className="main-card-action-container"
                    style={{
                      width: "301px",
                      alignSelf: "center",
                      borderRadius: "5px",
                    }}
                  >
                    <Button size="small" style={{ color: "#ffff" }}>
                      Check out
                    </Button>
                  </CardActions>
                </Link>
              ) : (
                <CardActions
                  className="main-card-action-container"
                  onClick={() => {
                    addCartItemhandler(product);
                    setItemIncart(true);
                  }}
                  style={{
                    width: "301px",
                    alignSelf: "center",
                    borderRadius: "5px",
                  }}
                >
                  <Button size="small" style={{ color: "#ffff" }}>
                    Add to cart <AddShoppingCartIcon />
                  </Button>
                </CardActions>
              )}
            </Grid>
          </Grid>
        )}
      </div>
    </React.Fragment>
  );
};
