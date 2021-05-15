import React, { useState } from 'react';
import Categories from './Categories';
import Products from './Products';
import items from './productsData';
import logo from './site-logo.svg';
const allCategories = ['all', ...new Set(items.map((item) => item.category))];
const App = () => {
  const [productItems, setProductItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setProductItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);

    setProductItems(newItems);
  };

  return (
    <>
      <header>
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='logo'>
                <img src={logo} alt='' />
              </div>
              <Categories
                filterItems={filterItems}
                categories={categories}
              ></Categories>
            </div>
          </div>
        </div>
      </header>
      <section>
        <div className='container'>
          <Products items={productItems} />
        </div>
      </section>
      <footer>
        <div className='container'>
          <p>
            This app created by{' '}
            <a href='https://monirhossain.com'>Monir Hossain</a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default App;
