import React from 'react'
import SidebarCategoryList from "./SidebarCategory"
import ProductShowcase from "./ProductShowcase"

export default function Sidebar() {
  return (
    <div class="sidebar  has-scrollbar" data-mobile-menu>
        <SidebarCategoryList/>
        <ProductShowcase/>
    </div>
 )
}

