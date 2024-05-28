
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';



interface Product {
  id: number;
  name: string;
  imageSrc: string;
  altText: string;
  rating: number;
  originalPrice: number;
  discountedPrice: number;
}

const products: Product[] = [
  {
    id: 1,
    name: "Baby fabric shoes",
    imageSrc: "/products/1.jpg",
    altText: "Baby fabric shoes",
    rating: 5,
    originalPrice: 5.00,
    discountedPrice: 4.00
  },
  {
    id: 2,
    name: "Men's hoodies t-shirt",
    imageSrc: "/products/2.jpg",
    altText: "Men's hoodies t-shirt",
    rating: 4.5,
    originalPrice: 17.00,
    discountedPrice: 7.00
  },
  {
    id: 3,
    name: "Girls t-shirt",
    imageSrc: "/products/3.jpg",
    altText: "Girls t-shirt",
    rating: 4.5,
    originalPrice: 5.00,
    discountedPrice: 3.00
  },
  {
    id: 4,
    name: "Woolen hat for men",
    imageSrc: "/products/4.jpg",
    altText: "Woolen hat for men",
    rating: 5,
    originalPrice: 15.00,
    discountedPrice: 12.00
  }
];

const ProductShowcase: React.FC = () => {
  return (
    <div className="product-showcase">
      <h3 className="showcase-heading">Best sellers</h3>
      <div className="showcase-wrapper">
        <div className="showcase-container">
          {products.map((product) => (
            <div key={product.id} className="showcase">
              <Link href="#" className="showcase-img-box">
                <Image src={product.imageSrc} alt={product.altText} width={75} height={75} className="showcase-img" />
              </Link>
              <div className="showcase-content">
                <Link href="#">
                  <h4 className="showcase-title">{product.name}</h4>
                </Link>
                <div className="showcase-rating">
                  {Array.from({ length: Math.floor(product.rating) }, (_, i) => (
                    <Image key={i} src="/star-icon.svg" name="star" width={15} height={15}/>
                    
                  ))}
                  {product.rating % 1 !== 0 && <ion-icon name="star-half-outline"></ion-icon>}
                </div>
                <div className="price-box">
                  <del>${product.originalPrice.toFixed(2)}</del>
                  <p className="price">${product.discountedPrice.toFixed(2)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductShowcase;
