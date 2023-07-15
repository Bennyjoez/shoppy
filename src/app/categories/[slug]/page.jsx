'use client';
import getComments from '@/lib/getComments';
import getProducts from '@/lib/getProducts';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const SingleCategory = async ({params}) => {
  const [category, setCategory] = useState([])
  const targetId = params.slug;
  useEffect(() => {
    (async () => {
      const products = await getProducts();
      desired = await products.filter((product) => product.category.split(' ')[0] == targetId)
      setCategory(desired)
      console.log(category)
    })()
  }, [])
  return (
    <div className="min-h-screen">SingleCategory</div>
  );
}
export default SingleCategory;
