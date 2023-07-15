import getProducts from '@/lib/getProducts';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Categories = async () => {
  const data = await getProducts();
  const products = {
    "Men's Clothing": "/men.jpg",
    "Women's Clothing": "/women.jpg",
    "Jewelery": "/jewelery_2.jpg",
    "Electronics": "/electronics.jpg",
  };
  const categories = Object.keys(products)

  return (
    <div className="min-h-screen text-blue-950">
      <ul
        className='grid gap-4 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4'
      >
        {categories?.map((category, i) => {
          return (
            <Link
              key={i}
              href={`/categories/${category.split(' ')[0]}`}
              className='my-10 bg-white rounded-xl hover:text-orange-400 hover:underline'
            >
              <h2
                className='font-bold text-2xl text-center py-4 hover:underline'>{category}</h2>
              <Image
                src={products[category]}
                alt={category}
                height={400}
                width={400}
                className='self-center w-full'
              />
            </Link>
          )
        })}
      </ul>
    </div>
  )
  };

export default Categories;
