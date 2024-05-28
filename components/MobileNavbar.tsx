
import NavbarMobile from './NavbarMobile';

const MobileNavbar = () => {
  const menuItems = [
    {
      title: 'Home',
      href: '#',
    },
    {
      title: "Men's",
      subItems: [
        { title: 'Shirt', href: '#' },
        { title: 'Shorts & Jeans', href: '#' },
        { title: 'Safety Shoes', href: '#' },
        { title: 'Wallet', href: '#' },
      ],
    },
    // Add more menu items as needed
  ];

  return <NavbarMobile menuItems={menuItems} />;
};

export default MobileNavbar;

