import React, { FC, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Calculate } from "../../utilities/utility";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "../Cart/cart.css";
import { Link } from "react-router-dom";
import { FavoriteProducts } from "../FavoriteProducts";

const Product: FC<any> = (props: any) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <FavoriteProducts product={props?.product} />
      <Link
        to={{
          pathname: "/products/" + props?.product?.id,
        }}
        style={{ textDecoration: "none", color: "rgba(0, 0, 0, 0.87)" }}
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
