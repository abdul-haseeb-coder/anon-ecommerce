
import React from 'react';
import Image from 'next/image';
import Link from 'next/image';



const CategoryItem = ({ imgSrc, altText, title, amount, link }) => {
  return (
    <div className="category-item">
      <div className="category-img-box">
        <Image src={imgSrc} alt={altText} width={30} height={30} />
      </div>
      <div className="category-content-box">
        <div className="category-content-flex">
          <h3 className="category-item-title">{title}</h3>
          <p className="category-item-amount">({amount})</p>
        </div>
        <Link href={link} className="category-btn">Show all</Link>
      </div>
    </div>
  );
};

export default CategoryItem;
