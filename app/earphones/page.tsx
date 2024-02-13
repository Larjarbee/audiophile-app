import BringCard from '@/components/shared/BringCard';
import Category from '@/components/shared/Category';
import Hero from '@/components/shared/Hero';
import React from 'react';
import EarphonePng from '../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const EarphonesPage = () => {
  return (
    <>
      <Hero text='EARPHONES' />

      <div className='max-w-6xl p-5 mx-auto my-14 space-y-20'>
        <section className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'>
          <div>
            <Image src={EarphonePng} alt='img' />
          </div>

          <div className='space-y-5 text-Black-dark'>
            <h1 className='text-5xl font-semibold'>
              YX1 WIRELESS
              <br />
              EARPHONES
            </h1>
            <h2 className='opacity-60 text-sm'>
              Tailor your listening experience with bespoke dynamic drivers
              <br />
              from the new YX1 Wireless Earphones. Enjoy incredible
              <br /> high-fidelity sound even in noisy environments with its
              active
              <br />
              noise cancellation feature.
            </h2>

            <Button>SEE PRODUCT</Button>
          </div>
        </section>

        <Category />
        <BringCard />
      </div>
    </>
  );
};

export default EarphonesPage;
