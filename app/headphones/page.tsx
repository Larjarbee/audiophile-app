import React from 'react';
import HeadphonePng from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import Headphone1Png from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import Headphone2Png from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import Hero from '@/components/shared/Hero';
import Category from '@/components/shared/Category';
import BringCard from '@/components/shared/BringCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const HeadphonesPage = () => {
  return (
    <>
      <Hero text='HEADPHONES' />

      <div className='max-w-6xl p-5 mx-auto my-14 space-y-20'>
        <section className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'>
          <div>
            <Image src={Headphone2Png} alt='img' />
          </div>
          <div className='space-y-5 text-Black-dark'>
            <h2 className='spacing opacity-80 font-light text-sm text-primary'>
              NEW PRODUCT
            </h2>
            <h1 className='text-5xl font-semibold'>
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>
            <h2 className='opacity-60 text-sm'>
              The new XX99 Mark II headphones is the pinnacle of pristine
              <br />
              audio. It redefines your premium headphone experience by
              <br /> reproducing the balanced depth and precision of
              studio-quality
              <br />
              sound.
            </h2>

            <Button>SEE PRODUCT</Button>
          </div>
        </section>

        <section className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'>
          <div className='space-y-5 text-Black-dark'>
            <h1 className='text-5xl font-semibold'>
              XX99 MARK I
              <br />
              HEADPHONES
            </h1>
            <h2 className='opacity-60 text-sm'>
              As the gold standard for headphones, the classic XX99 Mark I
              <br />
              offers detailed and accurate audio reproduction for
              <br /> audiophiles, mixing engineers, and music aficionados alike
              in studio-quality
              <br />
              studios and on the go.
            </h2>

            <Button>SEE PRODUCT</Button>
          </div>

          <div>
            <Image src={Headphone1Png} alt='img' />
          </div>
        </section>

        <section className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'>
          <div>
            <Image src={HeadphonePng} alt='img' />
          </div>
          <div className='space-y-5 text-Black-dark'>
            <h1 className='text-5xl font-semibold'>
              XX59
              <br />
              HEADPHONES
            </h1>
            <h2 className='opacity-60 text-sm'>
              Enjoy your audio almost anywhere and customize it to your
              <br />
              specific tastes with the XX59 headphones. The stylish yet
              <br /> durable versatile wireless headset is a brilliant companion
              at studio-quality
              <br />
              home or on the move.
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

export default HeadphonesPage;
