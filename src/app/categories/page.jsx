import getProducts from '@/lib/getProducts';
import React from 'react';

const Categories = async () => {
  const data = await getProducts();
  const products = [];

  const men = await data.filter((each) => each.category === 'men\'s clothing');
  const women = await data.filter((each) => each.category === 'women\'s clothing');
  const jewelery = await data.filter((each) => each.category === 'jewelery');
  const electronics = await data.filter((each) => each.category === 'electronics');

  products.push({ "Men's clothing": men });
  products.push({ "Women's clothing": women });
  products.push({ Jewelery: jewelery });
  products.push({ electronics: electronics });
  console.log(products)

  return (
    <div className="min-h-screen">
      <ul>
        {products?.map((category, i) => {
          return (
            <li key={i}>
              <h4>test</h4>
            </li>
          )
        })}
      </ul>
    </div>
  )
  };

export default Categories;
