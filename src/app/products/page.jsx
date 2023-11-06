"use client"

import React from 'react';
import Product from '@/components/product/Product';
import getProducts from '@/lib/getProducts';
import { useQuery } from 'react-query';

const Products = () => {
  const {
    data: data,
    error,
    isLoading,
  } = useQuery("products", getProducts);

  if (isLoading) return <div className='text-black'>Fetching products...</div>

  if(error) return <div>An error occurred: {error.message}</div>

  const products = [];

  const men = data?.filter((each) => each.category === 'men\'s clothing');
  const women = data?.filter((each) => each.category === 'women\'s clothing');
  const jewelery = data?.filter((each) => each.category === 'jewelery');
  const electronics = data?.filter((each) => each.category === 'electronics');

  products.push({ "Men's clothing": men });
  products.push({ "Women's clothing": women });
  products.push({ Jewelery: jewelery });
  products.push({ electronics: electronics });

  return (
    <div className="min-h-screen text-blue-950 mb-14">
      <h2 className="font-bold text-4xl text-center my-4">Products</h2>
      <ul className="">
        {products?.map((item, i) => {
          const category = Object.keys(item)[0];
          return (
            <Product key={i} category={category} item={item} />
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
