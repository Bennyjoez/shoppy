import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../button/button'

const Product = ({ category, item }) => {
  const capitalizeEachWord = (str) => {
    const words = str.split(' ');
    const capitalizedWords = words.map(word => {
      const firstChar = word.charAt(0);
      const restOfWord = word.slice(1);
      return firstChar.toUpperCase() + restOfWord.toLowerCase();
    });

    return capitalizedWords.join(' ');
  }

  const checkLen = (title) => {
    const maxlen = 20;
    if(title.length < maxlen) {
      return capitalizeEachWord(title);
    }
    const word = title.slice(0, maxlen) + '...'
    return capitalizeEachWord(word)
  }

  return (
    <li>
      <h4 className="font-bold text-lg bg-blue-900 text-white p-2 capitalize">{category}</h4>
      <ul className="flex p-4 overflow-x-auto">
        {item[category].map(({
          id, image, price, rating, title,
        }) => (
          <Link
            key={id}
            href={`/products/${id}`}
            className="box-content h-full min-w-fit w-48 max-w-xs border m-2 bg-white p-2 rounded-xl flex flex-col shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/50"
          >
            <Image
              src={image}
              alt={title}
              height="200"
              width="200"
              className="w-24 h-24 object-contain b"
            />
            <div className="flex my-2">
              <h4 className="font-bold mr-auto">
                $
                {price}
              </h4>
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
            <h4 className="">{checkLen(title)}</h4>
            <div className='flex flex-col'>
              <Button name="Details" />
              <Button name="Add to Cart" />
            </div>
          </Link>
        ))}
      </ul>
    </li>
  )
}

export default Product