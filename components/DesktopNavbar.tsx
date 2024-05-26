"use client"
import React, { useState } from 'react';
import Image from 'next/image'; // Use this if you are using Next.js
import Link from 'next/link';

type MenuItem = {
  title: string;
  href: string;
  subItems?: MenuItem[];
  banner?: string;
  bannerAlt?: string;
};

const menuItems: MenuItem[] = [
  { title: 'Home', href: '/home' },
  {
    title: 'Categories',
    href: '/categories',
    subItems: [
      {
        title: 'Electronics',
        href: '/categories/electronics',
        subItems: [
          { title: 'Desktop', href: '/categories/electronics/desktop' },
          { title: 'Laptop', href: '/categories/electronics/laptop' },
          { title: 'Camera', href: '/categories/electronics/camera' },
          { title: 'Tablet', href: '/categories/electronics/tablet' },
          { title: 'Headphone', href: '/categories/electronics/headphone' },
        ],
        banner: '/assets/images/electronics-banner-1.jpg',
        bannerAlt: 'headphone collection',
      },
      // Add more subcategories as needed
    ],
  },
  { title: "Men's", href: '/men' },
  { title: "Women's", href: '/women' },
  { title: 'Jewelry', href: '/jewelry' },
  { title: 'Perfume', href: '/perfume' },
  { title: 'Blog', href: '/blog' },
  { title: 'Hot Offers', href: '/hot-offers' },
];

const DesktopNavbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMouseEnter = (title: string) => {
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <nav className="desktop-navigation-menu">
      <div className="container">
        <ul className="desktop-menu-category-list">
          {menuItems.map((item) => (
            <li
              key={item.title}
              className="menu-category"
              onMouseEnter={() => handleMouseEnter(item.title)}
              onMouseLeave={handleMouseLeave}
            >
              <Link href={item.href} className="menu-title">
                {item.title}
              </Link>
              {item.subItems && (
                <div className={`dropdown-panel ${activeMenu === item.title ? 'show' : ''}`}>
                  {item.subItems.map((subItem) => (
                    <ul className="dropdown-panel-list" key={subItem.title}>
                      <li className="menu-title">
                        <Link href={subItem.href}>{subItem.title}</Link>
                      </li>
                      {subItem.subItems && subItem.subItems.map((subSubItem) => (
                        <li className="panel-list-item" key={subSubItem.title}>
                          <Link href={subSubItem.href}>{subSubItem.title}</Link>
                        </li>
                      ))}
                      {subItem.banner && (
                        <li className="panel-list-item">
                          <Link href={subItem.href}>
                            <Image src={subItem.banner} alt={subItem.bannerAlt} width={250} height={119} />
                          </Link>
                        </li>
                      )}
                    </ul>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default DesktopNavbar;
