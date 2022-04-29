import React, { FC, useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Calculate } from "../../utilities/utility";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./cart.css";
import {Link} from "react-router-dom"
const CartItem: FC<any> = (props: any) => {
  return (
    <React.Fragment>
      <Card sx={{ maxWidth: 345 }}>
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
            justifyContent={"space-between"}
          >
            <span className="top-price-container">
              Price: <CurrencyRupeeIcon fontSize="small" />
              {props?.product?.price}{" "}INR
            </span>
            <span className="top-price-container">
              Total: <CurrencyRupeeIcon fontSize="small" />
              {Calculate(
                props?.product?.amount,
                Number(props?.product?.price)
              )}{" "}
              INR
            </span>
          </Typography>
        </CardContent>
        </Link>
        <CardActions className="main-card-action-container">
        <RemoveIcon
            className="shopping-icon-color"
            onClick={() =>
              props?.handleRemoveFromCart &&
              props?.handleRemoveFromCart(props?.product?.id)
            }
            fontSize="large"
          />
          <span className="amout-container">{props?.product?.amount}</span>
          <AddIcon
            className="shopping-icon-color"
            onClick={() =>
              props?.addCartItemhandler &&
              props?.addCartItemhandler(props?.product)
            }
            fontSize="large"
          />    
        </CardActions>
      </Card>
    </React.Fragment>
  );
};
export default CartItem;
