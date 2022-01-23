/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProductCard from "./ProductCard";

export default function ProductsWidget() {
  return (
    <>
      <div className="container-fluid mb-16">
        <div className="grid grid-cols-4 gap-x-8 gap-y-10">


          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          

        </div>
      </div>
    </>
  );
}
