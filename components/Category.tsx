
import React from 'react';
import CategoryItem from './CategoryItem';

const categories = [
  { imgSrc: '/icons/dress.svg', altText: 'dress & frock', title: 'Dress & frock', amount: 53, link: '#' },
  { imgSrc: '/icons/coat.svg', altText: 'winter wear', title: 'Winter wear', amount: 58, link: '#' },
  { imgSrc: '/icons/glasses.svg', altText: 'glasses & lens', title: 'Glasses & lens', amount: 68, link: '#' },
  { imgSrc: '/icons/shorts.svg', altText: 'shorts & jeans', title: 'Shorts & jeans', amount: 84, link: '#' },
  { imgSrc: '/icons/tee.svg', altText: 't-shirts', title: 'T-shirts', amount: 35, link: '#' },
  { imgSrc: '/icons/jacket.svg', altText: 'jacket', title: 'Jacket', amount: 16, link: '#' },
  { imgSrc: '/icons/watch.svg', altText: 'watch', title: 'Watch', amount: 27, link: '#' },
  { imgSrc: '/icons/hat.svg', altText: 'hat & caps', title: 'Hat & caps', amount: 39, link: '#' },
];

const Category = () => {
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
              amount={category.amount}
              link={category.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
