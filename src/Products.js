import React from 'react';

const Products = ({ items }) => {
  return (
    <div className='row g-3'>
      {items.map((productItem) => {
        const { id, title, img, price, category } = productItem;
        return (
          <div key={id} className='col-lg-3'>
            <div className='product'>
              <img src={img} alt='' />
              <div className='product-body'>
                <h5>{category}</h5>
                <h3>{title}</h3>
                <h2>$ {price}</h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
