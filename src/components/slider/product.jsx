import React from 'react'
import Image from 'next/image'

const product = ({image, name}) => {
  return (
    <div>
      <Image
        src={image}
        alt={name}
      ></Image>
    </div>
  )
}

export default product