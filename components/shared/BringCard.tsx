import React from 'react';
import ManPng from '../../assets/shared/desktop/image-best-gear.jpg';
import Image from 'next/image';

const BringCard = () => {
  return (
    <section className='grid grid-cols-1 items-center gap-5 md:grid-cols-2'>
      <div className='flex flex-col '>
        <div className='space-y-5 max-w-[400px]'>
          <h2 className='text-4xl font-semibold tracking-wider uppercase'>
            Bringing you the <span className='text-primary'>best</span> audio
            gear
          </h2>
          <h6 className='text-sm leading-6 opacity-60'>
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </h6>
        </div>
      </div>
      <div>
        <Image
          src={ManPng}
          alt='Man with Earphone'
          className='mx-auto rounded-[12px]'
        />
      </div>
    </section>
  );
};

export default BringCard;
