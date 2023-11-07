'use client';
import getComments from '@/lib/getComments';
import getProducts from '@/lib/getProducts';
import Image from 'next/image';
import React from 'react';
import { useQuery } from 'react-query';

const SingleProduct = ({params}) => {
  const targetId = params.slug;
  const {
    data: products,
    isLoading,
    error,
  } = useQuery("products", getProducts);

  const {
    data: comments,
  } = useQuery("comments", getComments);

  if(isLoading) return <div className='text-black'>Loading product details...</div>
  if(error) return <div>An error occured: {error.message}</div>

  const {id, image, price, rating, title, description} = products?.filter((prod) => prod.id == targetId)[0];

  return (
    <div key={id} className="w-fit max-h-fit mb-4 ms-auto me-auto xl:w-3/4 bg-white flex flex-col relative text-blue-950"
    >
      <div className='md:flex w-fit'>
        <div className='w-1/2 md:h-3/4 xl:min-h-5/6 ms-auto me-auto'>
          <Image
            src={image}
            alt={title}
            height="200"
            width="200"
            className="h-1/2 w-full object-cover"
          />
        </div>
        <div className='md:w-1/2 w-full p-2'>
          <h4 className="font-bold text-lg">{title}</h4>
          <p className='w-full'>{description}</p>
          <h4 className="font-bold mt-2 text-2xl lg:text-3xl">
            $
            {price}
          </h4>
          <button type="button" className="border bg-sky-500/[.05] rounded-lg p-2 w-full mt-4 hover:text-orange-400 shadow-lg shadow-blue-500 hover:font-bold hover:bg-blue-950 transition-all font-bold">
            Add to Cart
          </button>
          <div className="flex my-2 mt-8">
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
          <h4 className='font-bold bg-purple-900 text-orange-400 text-xl border-2 p-2 my-4 text-center rounded-lg'>Product Reviews</h4>
          <ul className='h-full'>
            {comments?.map(({body, email, name, id}) => {
              return (
                <li
                  key={id}
                  className='my-2 odd:bg-amber-600 even:bg-amber-400 p-2'
                >
                  <a
                    href={`mailto:${email}`}
                    className='font-bold capitalize text-lg'
                  >{name}</a>
                  <p>{body}</p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default SingleProduct;
