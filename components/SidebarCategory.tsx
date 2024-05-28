
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';


interface SidebarCategoryProps {
  imgSrc: string;
  altText: string;
  categoryTitle: string;
  items: { name: string; stock: number }[];
}

const SidebarCategory: React.FC<SidebarCategoryProps> = ({ imgSrc, altText, categoryTitle, items }) => {
  return (
    <li className="sidebar-menu-category">
      <button className="sidebar-accordion-menu" data-accordion-btn>
        <div className="menu-title-flex">
          <Image src={imgSrc} alt={altText} width={20} height={20} className="menu-title-img" />
          <p className="menu-title">{categoryTitle}</p>
        </div>
        <div>
          <Image src="/plus.svg" className="add-icon"  width={20} height={20}/> 
          <Image src="/minus.svg" className="remove-icon"  width={20} height={20}/>
        </div>
      </button>
      <ul className="sidebar-submenu-category-list" data-accordion>
        {items.map((item, index) => (
          <li className="sidebar-submenu-category" key={index}>
            <Link href="#" className="sidebar-submenu-title">
              <p className="product-name">{item.name}</p>
              <data value={item.stock} className="stock" title="Available Stock">
                {item.stock}
              </data>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  );
};

const SidebarCategoryList: React.FC = () => {
  const categories = [
    {
      imgSrc: '/icons/dress.svg',
      altText: 'clothes',
      categoryTitle: 'Clothes',
      items: [
        { name: 'Shirt', stock: 300 },
        { name: 'Shorts & jeans', stock: 60 },
        { name: 'Jacket', stock: 50 },
        { name: 'Dress & frock', stock: 87 },
      ],
    },
    {
      imgSrc: '/icons/shoes.svg',
      altText: 'footwear',
      categoryTitle: 'Footwear',
      items: [
        { name: 'Sports', stock: 45 },
        { name: 'Formal', stock: 75 },
        { name: 'Casual', stock: 35 },
        { name: 'Safety Shoes', stock: 26 },
      ],
    },
    {
      imgSrc: '/icons/jewelry.svg',
      altText: 'jewelry',
      categoryTitle: 'Jewelry',
      items: [
        { name: 'Earrings', stock: 46 },
        { name: 'Couple Rings', stock: 73 },
        { name: 'Necklace', stock: 61 },
      ],
    },
    {
      imgSrc: '/icons/perfume.svg',
      altText: 'perfume',
      categoryTitle: 'Perfume',
      items: [
        { name: 'Clothes Perfume', stock: 12 },
        { name: 'Deodorant', stock: 60 },
        { name: 'Jacket', stock: 50 },
        { name: 'Dress & frock', stock: 87 },
      ],
    },
    {
      imgSrc: '/icons/cosmetics.svg',
      altText: 'cosmetics',
      categoryTitle: 'Cosmetics',
      items: [
        { name: 'Shampoo', stock: 68 },
        { name: 'Sunscreen', stock: 46 },
        { name: 'Body Wash', stock: 79 },
        { name: 'Makeup Kit', stock: 23 },
      ],
    },
    {
      imgSrc: 'icons/glasses.svg',
      altText: 'glasses',
      categoryTitle: 'Glasses',
      items: [
        { name: 'Sunglasses', stock: 50 },
        { name: 'Lenses', stock: 48 },
      ],
    },
    {
      imgSrc: '/icons/bag.svg',
      altText: 'bags',
      categoryTitle: 'Bags',
      items: [
        { name: 'Shopping Bag', stock: 62 },
        { name: 'Gym Backpack', stock: 35 },
        { name: 'Purse', stock: 80 },
        { name: 'Wallet', stock: 75 },
      ],
    },
  ];

  return (
    <div className="sidebar-category">
      <div className="sidebar-top">
        <h2 className="sidebar-title">Category</h2>
        <button className="sidebar-close-btn" data-mobile-menu-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>
      </div>
      <ul className="sidebar-menu-category-list">
        {categories.map((category, index) => (
          <SidebarCategory
            key={index}
            imgSrc={category.imgSrc}
            altText={category.altText}
            categoryTitle={category.categoryTitle}
            items={category.items}
          />
        ))}
      </ul>
    </div>
  );
};

export default SidebarCategoryList;
