'use client';
import React from 'react';
import HeadphonePng from '../../assets/product-xx59-headphones/desktop/image-category-page-preview.jpg';
import Headphone1Png from '../../assets/product-xx99-mark-one-headphones/desktop/image-category-page-preview.jpg';
import Headphone2Png from '../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import Hero from '@/components/shared/Hero';
import Category from '@/components/shared/Category';
import BringCard from '@/components/shared/BringCard';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getAllProducts } from '@/lib/api/getProducts';
import Loading from '@/components/shared/Loading';
import Link from 'next/link';

const HeadphonesPage = () => {
  const { data, isLoading } = getAllProducts('headphones');
  console.log(data?.data);

  return (
    <>
      <Hero text='HEADPHONES' />

      <div className='max-w-6xl p-5 mx-auto my-14 space-y-20 '>
        {isLoading && <Loading />}
        {data?.data?.map((el: any) => (
          <section
            key={el?.id}
            className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'
          >
            <div>
              <Image src={Headphone2Png} alt='img' />
            </div>
            <div className='space-y-5 text-Black-dark max-w-sm'>
              <h2 className='spacing opacity-80 font-light text-sm text-primary'>
                NEW PRODUCT
              </h2>
              <h1 className='text-5xl font-semibold'>{el?.name}</h1>
              <h2 className='opacity-60 text-sm'>{el?.description}</h2>

              <Button>
                <Link href={`/${el?.category}/${el?.id}`}>SEE PRODUCT</Link>
              </Button>
            </div>
          </section>
        ))}
        {/* <section className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'>
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
        </section> */}
        <Category />
        <BringCard />
      </div>
    </>
  );
};

export default HeadphonesPage;
