"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component
import SocialLink from './SocialLink'; // Import the SocialLink component

type MenuItem = {
  title: string;
  href?: string;
  subItems?: { title: string; href: string }[];
};

type SubMenuItemProps = {
  title: string;
  href: string;
};

const SubMenuItem: React.FC<SubMenuItemProps> = ({ title, href }) => (
  <li className="submenu-category">
    <Link href={href}>{title}</Link>
  </li>
);

const NavbarMobile: React.FC<{ menuItems: MenuItem[] }> = ({ menuItems }) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleAccordionClick = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  const MenuItemContent: React.FC<MenuItem> = ({ title, href, subItems }) => (
    <li className="menu-category">
      {href ? (
        <Link href={href} className="menu-title">
          {title}
        </Link>
      ) : (
        <>
          <button className="accordion-menu" data-accordion-btn onClick={() => handleAccordionClick(title)}>
            <p className="menu-title">{title}</p>
            <div>
              <Image src="/add-icon.png" alt="Add" width={24} height={24} className="add-icon" />
              <Image src="/remove-icon.png" alt="Remove" width={24} height={24} className="remove-icon" />
            </div>
          </button>
          {subItems && (
            <ul className={`submenu-category-list ${activeMenu === title ? 'show' : ''}`} data-accordion>
              {subItems.map((subItem) => (
                <SubMenuItem key={subItem.title} title={subItem.title} href={subItem.href} />
              ))}
            </ul>
          )}
        </>
      )}
    </li>
  );

  return (
    <nav className="mobile-navigation-menu has-scrollbar" data-mobile-menu>
      <div className="menu-top">
        <h2 className="menu-title">Menu</h2>
        <button className="menu-close-btn" data-mobile-menu-close-btn>
          <Image src="/close-icon.png" alt="Close" width={24} height={24} className="close-icon" />
        </button>
      </div>
      <ul className="mobile-menu-category-list">
        {menuItems.map((item) => (
          <MenuItemContent key={item.title} {...item} />
        ))}
      </ul>
      <div className="menu-bottom">
        <ul className="menu-category-list">
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Language</p>
              <Image src="/caret-back-icon.png" alt="Back" width={24} height={24} className="caret-back" />
            </button>
            <ul className="submenu-category-list" data-accordion>
              <SubMenuItem title="English" href="#" />
              <SubMenuItem title="Español" href="#" />
              <SubMenuItem title="Français" href="#" />
            </ul>
          </li>
          <li className="menu-category">
            <button className="accordion-menu" data-accordion-btn>
              <p className="menu-title">Currency</p>
              <Image src="/caret-back-icon.png" alt="Back" width={24} height={24} className="caret-back" />
            </button>
            <ul className="submenu-category-list" data-accordion>
              <SubMenuItem title="USD $" href="#" />
              <SubMenuItem title="EUR €" href="#" />
            </ul>
          </li>
        </ul>
        <ul className="menu-social-container">
          <SocialLink href="#" icon="/facebook-icon.png" alt="Facebook" />
          <SocialLink href="#" icon="/twitter-icon.png" alt="Twitter" />
          <SocialLink href="#" icon="/instagram-icon.png" alt="Instagram" />
          <SocialLink href="#" icon="/linkedin-icon.png" alt="LinkedIn" />
        </ul>
      </div>
    </nav>
  );
};

export default NavbarMobile;

