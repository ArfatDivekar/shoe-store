import React from 'react';
import Link from 'next/link';
import { urlFor } from '@/lib/client';

const HeroBanner = ({ heroBanner: { slug, smallText, midText, largeText1, image, buttonText, desc  } }) => {
  return (
    <div className='hero-banner-container'>
      <div className='banner-data'>
        <p className='first-text'>{smallText}</p>
        <h3 className='second-text'>{midText}</h3>
        <h1 className='third-text'>{largeText1}</h1>
        <img 
          src={urlFor(image)} 
          alt="banner-shoes" 
          className='hero-banner-image'
        />

        <div className='desc-details'>
          <Link href={`/product/${slug.current}`}>
            <button type='button'>{buttonText}</button>          
          </Link>

          <div className='desc'>
            <h5>Description</h5>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner