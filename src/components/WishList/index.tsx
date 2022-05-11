import { Button, Grid } from "@mui/material";
import React, { useContext } from "react";
import { WishListContext } from "../Context/productContext";
import Product from "../Product/Product";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./wishlist.css";

const classes = {
  gridItem: {
    paddingLeft: "4px",
  },
};
export const WishList = () => {
  const [wishList] = useContext(WishListContext);

  return (
    <React.Fragment>
      <div style={{ marginTop: "85px", marginBottom: "30px" }}>
        {wishList?.length === 0 ? (
          <>
            <p className="cart-heading-text">Wishlist is empty</p>
            <h5 className="wishlist-btm-container">
              You haven't added any products yet
            </h5>
            <h5 className="wishlist-btm-container">
              Click <FavoriteBorderIcon /> to save products
            </h5>

            <Link to="/" className="linkTextDirection">
              <Button variant="contained">Go to Products</Button>
            </Link>
          </>
        ) : (
          <div className="cart-heading-text">Your Wishlist</div>
        )}
        <Grid
          container
          spacing={3}
          marginLeft="0px"
          margin={"5px"}
          width={"99%"}
        >
          {wishList?.map((product: any) => {
            return (
              <Grid
                item
                key={product.id}
                xs={12}
                sm={4}
                style={classes.gridItem}
              >
                <Product product={product} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </React.Fragment>
  );
};
