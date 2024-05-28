import React from 'react';
import Sidebar from "./Sidebar";
import ProductBox from "./ProductBox";

export default function ProductContainer() {
  return (
   <div class="product-container">
      <div class="container">
        <Sidebar/>
        <ProductBox/>
      </div>
    </div>
  )
}

