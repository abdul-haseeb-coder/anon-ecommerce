import React from 'react'
import HeaderMain from "./HeaderMain"
import DesktopNavbar from "./DesktopNavbar"
import HeaderTop from "./HeaderTop"
import MobileNavbar from "./MobileNavbar"

export default function Header() {
  return (
  <header>
<HeaderTop/>
      <HeaderMain/>
<DesktopNavbar/>
 <MobileNavbar/>
      
    </header>)
}

