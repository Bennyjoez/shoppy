'use client';
import getProducts from '@/lib/getProducts';
import Image from 'next/image';
import React from 'react';

const SingleProduct = async ({params}) => {
  const targetId = params.slug;
  const products = await getProducts();
  const {id, image, price, rating, title, description} = products.filter((prod) => prod.id == targetId)[0];
  return (
    <div key={id} className="w-64 border m-2 bg-white p-2 rounded-xl flex flex-col relative shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/50"
    >
      <Image
        src={image}
        alt={title}
        height="200"
        width="200"
        className="h-1/2 w-full grow"
      />
      <div className="flex my-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
        </svg>
        <span className="ml-1 text-center">{rating.rate}</span>
        <span className="">
          (
          {rating.count}
          )
        </span>
      </div>
      <h4 className="">{title}</h4>
      <p>{description}</p>
      <h4 className="font-bold mt-2">
        $
        {price}
      </h4>
      <button type="button" className="border rounded-lg p-2 w-full mt-4 hover:text-orange-400 hover:font-bold hover:bg-blue-950 transition-all">
        Add to Cart
      </button>
    </div>
  )
};

export default SingleProduct;
