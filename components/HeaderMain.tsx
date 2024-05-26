import Link from "next/link"
import React from 'react';
import Image from 'next/image'; // Only if using Next.js, otherwise use <img> tag.

const HeaderMain = () => {
  return (
    <>
    <div className="header-main">
      <div className="container">
        <Link href="/" className="header-logo" />
          <Image src="/logo.svg" alt="Anon's logo" width={120} height={36} />
        <div className="header-search-container">
          <input type="search" name="search" className="search-field" placeholder="Enter your product name..." />
          <button className="search-btn"> 
              <Image  src="/search.svg" alt="Search Button" width={20} height={20}/>
          </button>
        </div>
        <div className="header-user-actions">
          <button className="action-btn">
              <Image src="/user.svg" alt="User"  width={40} height={40} />
          </button>
          <button className="action-btn">
              <Image src="/heart.svg" alt="Favorite"  width={40} height={40} />
            <span className="count">0</span>
          </button>
          <button className="action-btn">
              <Image  src="/bag.svg" alt="Cart" width={40} height={40}/>
            <span className="count">0</span>
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default HeaderMain;

