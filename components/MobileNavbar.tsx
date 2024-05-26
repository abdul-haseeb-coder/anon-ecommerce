"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IonIcon } from '@ionic/react'; // Assuming you're using Ionic for the icons

type SubMenuItem = {
  title: string;
  href: string;
};

type MenuItem = {
  title: string;
  href?: string;
  subItems?: SubMenuItem[];
};

const menuItems: MenuItem[] = [
  { title: 'Home', href: '/home' },
  {
    title: "Men's",
    subItems: [
      { title: 'Shirt', href: '/men/shirt' },
      { title: 'Shorts & Jeans', href: '/men/shorts-jeans' },
      { title: 'Safety Shoes', href: '/men/safety-shoes' },
      { title: 'Wallet', href: '/men/wallet' },
    ],
  },
  {
    title: "Women's",
    subItems: [
      { title: 'Dress & Frock', href: '/women/dress-frock' },
      { title: 'Earrings', href: '/women/earrings' },
      { title: 'Necklace', href: '/women/necklace' },
      { title: 'Makeup Kit', href: '/women/makeup-kit' },
    ],
  },
  {
    title: 'Jewelry',
    subItems: [
      { title: 'Earrings', href: '/jewelry/earrings' },
      { title: 'Couple Rings', href: '/jewelry/couple-rings' },
      { title: 'Necklace', href: '/jewelry/necklace' },
      { title: 'Bracelets', href: '/jewelry/bracelets' },
    ],
  },
  {
    title: 'Perfume',
    subItems: [
      { title: 'Clothes Perfume', href: '/perfume/clothes-perfume' },
      { title: 'Deodorant', href: '/perfume/deodorant' },
      { title: 'Flower Fragrance', href: '/perfume/flower-fragrance' },
      { title: 'Air Freshener', href: '/perfume/air-freshener' },
    ],
  },
  { title: 'Blog', href: '/blog' },
  { title: 'Hot Offers', href: '/hot-offers' },
];

const NavbarMobile: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleAccordionClick = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  return (
    <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>
        <button className="menu-close-btn" data-mobile-menu-close-btn>
          <IonIcon name="close-outline" />
        </button>
      </div>
      <ul className="mobile-menu-category-list">
        {menuItems.map((item) => (
          <li key={item.title} className="menu-category">
            {item.href ? (
              <Link href={item.href}>
                <a className="menu-title">{item.title}</a>
              </Link>
            ) : (
              <>
                <button
                  className="accordion-menu"
                  data-accordion-btn
                  onClick={() => handleAccordionClick(item.title)}
                >
                  <p className="menu-title">{item.title}</p>
                  <div>
                    <IonIcon name="add-outline" className="add-icon" />
                    <IonIcon name="remove-outline" className="remove-icon" />
                  </div>
                </button>
                {item.subItems && (
                  <ul
                    className={`submenu-category-list ${
                      activeMenu === item.title ? 'show' : ''
                    }`}
                    data-accordion
                  >
                    {item.subItems.map((subItem) => (
                      <li key={subItem.title} className="submenu-category">
                        <Link href={subItem.href}>
                          <a className="submenu-title">{subItem.title}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            )}
          </li>
        ))}
      </ul>
      <div className="menu-bottom">
        <ul className="menu-category-list">
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Language</p>
              <IonIcon name="caret-back-outline" className="caret-back" />
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link href="#">
                  <a className="submenu-title">English</a>
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#">
                  <a className="submenu-title">Español</a>
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#">
                  <a className="submenu-title">Français</a>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Currency</p>
              <IonIcon name="caret-back-outline" className="caret-back" />
            </button>
            <ul className="submenu-category-list" data-accordion>
              <li className="submenu-category">
                <Link href="#">
                  <a className="submenu-title">USD $</a>
                </Link>
              </li>
              <li className="submenu-category">
                <Link href="#">
                  <a className="submenu-title">EUR €</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <ul className="menu-social-container">
          <li>
            <Link href="#">
              <a className="social-link">
                <IonIcon name="logo-facebook" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="social-link">
                <IonIcon name="logo-twitter" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="social-link">
                <IonIcon name="logo-instagram" />
              </a>
            </Link>
          </li>
          <li>
            <Link href="#">
              <a className="social-link">
                <IonIcon name="logo-linkedin" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;

