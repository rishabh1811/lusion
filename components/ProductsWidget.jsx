/* eslint-disable @next/next/no-img-element */
import React from "react";
import Grid from "./Grid";
import ProductCard from "./ProductCard";

export default function ProductsWidget() {
  return (
    <>
      <div className="container-fluid mb-16">
        


          <Grid>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            
          </Grid>

        
      </div>
    </>
  );
}
