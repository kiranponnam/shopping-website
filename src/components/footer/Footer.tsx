import React from "react";
import "./footer.css";
import { Grid } from "@mui/material";
export const Footer = (props: any) => {
  return (
    <React.Fragment>
      <div className="footer-main-container">
        <footer>
          <section>
            <div className="container-Footer">
              <Grid container spacing={1} justifyContent={"center"}>
                <Grid item xs={12}  sm={12} md={6} lg={6} display={"flex"} >
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="web-footer-one">
                      <h4>ONLINE STORE</h4>
                      <h6>MEN CLOTHING</h6>
                      <h6>WOMEN CLOTHING</h6>
                      <h6>MEN ACCESSORIES</h6>
                      <h6>WOMEN ACCESSORIES</h6>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="web-footer-one">
                      <h4>HELFUL LINKS</h4>
                      <h6>ABOUT</h6>
                      <h6>CONTACT US</h6>
                      <h6>F&Q</h6>
                      <h6>PRIVACY POLICY</h6>
                    </div>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} sm={12} lg={6} display={"flex"}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="web-footer-one">
                      <h4>PARTNERS</h4>
                      <h6>LEVIS</h6>
                      <h6>PANTALOONS</h6>
                      <h6>MAX</h6>
                      <h6>ZARA</h6>
                    </div>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <div className="web-footer-one">
                      <h4>ADDRESS</h4>
                      <h6>BUILDING NO 101</h6>
                      <h6>CENTRAL AVENUE</h6>
                      <h6>LA-200235</h6>
                      <h6>UNITED STATES</h6>
                    </div>
                  </Grid>
                </Grid>
               <div className="copyrightContainer"> <span style={{border:'0.4px solid #ffff'}}></span>
               <p>© kiran ponnam <span>{new Date().getFullYear()} </span></p></div>
              </Grid>
            </div>
          </section>
        </footer>
      </div>
    </React.Fragment>
  );
};
