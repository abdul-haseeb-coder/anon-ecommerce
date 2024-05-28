
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




interface CategoryItemProps {
  imgSrc: string;
  altText: string;
  title: string;
  itemCount: number;
  href: string;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ imgSrc, altText, title, itemCount, href }) => {
  return (
    <div className="category-item">
      <div className="category-img-box">
        <Image src={imgSrc} alt={altText} width={30} height={30} />
      </div>
      <div className="category-content-box">
        <div className="category-content-flex">
          <h3 className="category-item-title">{title}</h3>
          <p className="category-item-amount">({itemCount})</p>
        </div>
        <Link href={href} className="category-btn">Show all</Link>
      </div>
    </div>
  );
};

const Category: React.FC = () => {
  const categories = [
    { imgSrc: '/icons/dress.svg', altText: 'dress & frock', title: 'Dress & frock', itemCount: 53, href: '#' },
    { imgSrc: '/icons/coat.svg', altText: 'winter wear', title: 'Winter wear', itemCount: 58, href: '#' },
    { imgSrc: '/icons/glasses.svg', altText: 'glasses & lens', title: 'Glasses & lens', itemCount: 68, href: '#' },
    { imgSrc: '/icons/shorts.svg', altText: 'shorts & jeans', title: 'Shorts & jeans', itemCount: 84, href: '#' },
    { imgSrc: '/icons/tee.svg', altText: 't-shirts', title: 'T-shirts', itemCount: 35, href: '#' },
    { imgSrc: '/icons/jacket.svg', altText: 'jacket', title: 'Jacket', itemCount: 16, href: '#' },
    { imgSrc: '/icons/watch.svg', altText: 'watch', title: 'Watch', itemCount: 27, href: '#' },
    { imgSrc: '/icons/hat.svg', altText: 'hat & caps', title: 'Hat & caps', itemCount: 39, href: '#' },
  ];

  return (
    <div className="category">
      <div className="container">
        <div className="category-item-container has-scrollbar">
          {categories.map((category, index) => (
            <CategoryItem
              key={index}
              imgSrc={category.imgSrc}
              altText={category.altText}
              title={category.title}
              itemCount={category.itemCount}
              href={category.href}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;

