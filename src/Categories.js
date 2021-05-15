import React from 'react';

const Categories = ({ filterItems, categories }) => {
  return (
    <div className='categories'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='btn'
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
