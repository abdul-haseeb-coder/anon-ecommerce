import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: number;
  name: string;
  category: string;
  imageSrc: string;
  altText: string;
  price: number;
  originalPrice: number;
}

interface ProductSection {
  title: string;
  products: Product[];
}

const productData: ProductSection[] = [
  {
    title: "New Arrivals",
    products: [
      {
        id: 1,
        name: "Relaxed Short full Sleeve T-Shirt",
        category: "Clothes",
        imageSrc: "/products/clothes-1.jpg",
        altText: "Relaxed Short full Sleeve T-Shirt",
        price: 45.0,
        originalPrice: 12.0,
      },
      {
        id: 2,
        name: "Girls Pink Embro Design Top",
        category: "Clothes",
        imageSrc: "/products/clothes-2.jpg",
        altText: "Girls Pink Embro Design Top",
        price: 61.0,
        originalPrice: 9.0,
      },
      {
        id: 3,
        name: "Black Floral Wrap Midi Skirt",
        category: "Clothes",
        imageSrc: "/products/clothes-3.jpg",
        altText: "Black Floral Wrap Midi Skirt",
        price: 76.0,
        originalPrice: 25.0,
      },
      {
        id: 4,
        name: "Pure Garment Dyed Cotton Shirt",
        category: "Mens Fashion",
        imageSrc: "/products/shirt-1.jpg",
        altText: "Pure Garment Dyed Cotton Shirt",
        price: 68.0,
        originalPrice: 31.0,
      },
      {
        id: 5,
        name: "MEN Yarn Fleece Full-Zip Jacket",
        category: "Winter wear",
        imageSrc: "/products/jacket-5.jpg",
        altText: "MEN Yarn Fleece Full-Zip Jacket",
        price: 61.0,
        originalPrice: 11.0,
      },
      {
        id: 6,
        name: "Mens Winter Leathers Jackets",
        category: "Winter wear",
        imageSrc: "/products/jacket-1.jpg",
        altText: "Mens Winter Leathers Jackets",
        price: 32.0,
        originalPrice: 20.0,
      },
      {
        id: 7,
        name: "Mens Winter Leathers Jackets",
        category: "Jackets",
        imageSrc: "/products/jacket-3.jpg",
        altText: "Mens Winter Leathers Jackets",
        price: 50.0,
        originalPrice: 25.0,
      },
      {
        id: 8,
        name: "Better Basics French Terry Sweatshorts",
        category: "Shorts",
        imageSrc: "/products/shorts-1.jpg",
        altText: "Better Basics French Terry Sweatshorts",
        price: 20.0,
        originalPrice: 10.0,
      },
    ],
  },
  {
    title: "Trending",
    products: [
      {
        id: 9,
        name: "Running & Trekking Shoes - White",
        category: "Sports",
        imageSrc: "/products/sports-1.jpg",
        altText: "Running & Trekking Shoes - White",
        price: 49.0,
        originalPrice: 15.0,
      },
      {
        id: 10,
        name: "Trekking & Running Shoes - black",
        category: "Sports",
        imageSrc: "/products/sports-2.jpg",
        altText: "Trekking & Running Shoes - black",
        price: 78.0,
        originalPrice: 36.0,
      },
      {
        id: 11,
        name: "Womens Party Wear Shoes",
        category: "Party wear",
        imageSrc: "/products/party-wear-1.jpg",
        altText: "Womens Party Wear Shoes",
        price: 94.0,
        originalPrice: 42.0,
      },
      {
        id: 12,
        name: "Sports Claw Women's Shoes",
        category: "Sports",
        imageSrc: "/products/sports-3.jpg",
        altText: "Sports Claw Women's Shoes",
        price: 54.0,
        originalPrice: 65.0,
      },
      {
        id: 13,
        name: "Air Trekking Shoes - white",
        category: "Sports",
        imageSrc: "/products/sports-6.jpg",
        altText: "Air Trekking Shoes - white",
        price: 52.0,
        originalPrice: 55.0,
      },
      {
        id: 14,
        name: "Boot With Suede Detail",
        category: "boots",
        imageSrc: "/products/shoe-3.jpg",
        altText: "Boot With Suede Detail",
        price: 20.0,
        originalPrice: 30.0,
      },
      {
        id: 15,
        name: "Men's Leather Formal Wear shoes",
        category: "formal",
        imageSrc: "/products/shoe-1.jpg",
        altText: "Men's Leather Formal Wear shoes",
        price: 56.0,
        originalPrice: 78.0,
      },
      {
        id: 16,
        name: "Casual Men's Brown shoes",
        category: "Casual",
        imageSrc: "/products/shoe-2.jpg",
        altText: "Casual Men's Brown shoes",
        price: 50.0,
        originalPrice: 55.0,
      },
    ],
  },
  {
    title: "Top Rated",
    products: [
      {
        id: 17,
        name: "Pocket Watch Leather Pouch",
        category: "Watches",
        imageSrc: "/products/watch-3.jpg",
        altText: "Pocket Watch Leather Pouch",
        price: 50.0,
        originalPrice: 34.0,
      },
      {
        id: 18,
        name: "Silver Deer Heart Necklace",
        category: "Jewellery",
        imageSrc: "/products/jewellery-3.jpg",
        altText: "Silver Deer Heart Necklace",
        price: 84.0,
        originalPrice: 30.0,
      },
      {
        id: 19,
        name: "Titan 100 Ml Womens Perfume",
        category: "Perfume",
        imageSrc: "/products/perfume.jpg",
        altText: "Titan 100 Ml Womens Perfume",
        price: 42.0,
        originalPrice: 10.0,
      },
      {
        id: 20,
        name: "Men's Leather Reversible Belt",
        category: "Belt",
        imageSrc: "/products/belt.jpg",
        altText: "Men's Leather Reversible Belt",
        price: 24.0,
        originalPrice: 10.0,
      },
      {
        id: 21,
        name: "Platinum Zircon Classic Ring",
        category: "jewellery",
        imageSrc: "/products/jewellery-2.jpg",
        altText: "Platinum Zircon Classic Ring",
        price: 62.0,
        originalPrice: 65.0,
      },
      {
        id: 22,
        name: "Smart watche Vital Plus",
        category: "Watches",
        imageSrc: "/products/watch-1.jpg",
        altText: "Smart watche Vital Plus",
        price: 56.0,
        originalPrice: 78.0,
      },
      {
        id: 23,
        name: "Shampoo Conditioner Packs",
        category: "Cosmetics",
        imageSrc: "/products/shampoo.jpg",
        altText: "Shampoo Conditioner Packs",
        price: 20.0,
        originalPrice: 30.0,
      },
      {
        id: 24,
        name: "Rose Gold Peacock Earrings",
        category: "Jewellery",
        imageSrc: "/products/jewellery-1.jpg",
        altText: "Rose Gold Peacock Earrings",
        price: 20.0,
        originalPrice: 30.0,
      },
    ],
  },
];

const ProductMinimal: React.FC = () => {
  return (
    <div className="product-minimal">
      {productData.map((section) => (
        <div key={section.title} className="product-showcase">
          <h2 className="title">{section.title}</h2>
          <div className="showcase-wrapper has-scrollbar">
            <div className="showcase-container">
              {section.products.map((product) => (
                <div key={product.id} className="showcase">
                  <Link href="#" className="showcase-img-box">
                    <Image
                      src={product.imageSrc}
                      alt={product.altText}
                      width="70"
                      height={70}
                      className="showcase-img"
                    />
                  </Link>
                  <div className="showcase-content">
                    <Link href="#">
                      <h4 className="showcase-title">{product.name}</h4>
                    </Link>
                    <Link href="#" className="showcase-category">
                      {product.category}
                    </Link>
                    <div className="price-box">
                      <p className="price">${product.price.toFixed(2)}</p>
                      <del>${product.originalPrice.toFixed(2)}</del>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductMinimal;
