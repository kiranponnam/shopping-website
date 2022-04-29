import { Grid } from "@mui/material";
import React, { FC, useContext } from "react";
import {
  GlobalLoaderContext,
  ProductListContext,
} from "../Context/productContext";
import Product from "../Product/Product";
import CircularProgress from "@mui/material/CircularProgress";
import ImageAutoSlider from "../Product/ImageAutoSlider/ImageAutoSlider";
import "./productList.css";

const classes = {
  gridItem: {
    paddingLeft: "4px",
  },
};
const ProductList: FC<any> = (props: any) => {
  const [productList, setProductList] = useContext(ProductListContext);
  const [isLoading, setGlobalLoading] = useContext(GlobalLoaderContext);
  return (
    <React.Fragment>
      {!isLoading && (
        <div className="image-component-container">
          <ImageAutoSlider />
        </div>
      )}
      {!isLoading && (
        <h1 className="clothing-heading">Clothing for men and women</h1>
      )}
      <Grid container spacing={3} marginLeft="0px" margin={"5px"} width={"99%"}>
        {isLoading ? (
          <div className="globalLoaderContainer">
            <CircularProgress size={50} />
          </div>
        ) : (
          productList?.map((product: any) => {
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
          })
        )}
      </Grid>
    </React.Fragment>
  );
};
export default ProductList;
