'use client';
import BringCard from '@/components/shared/BringCard';
import Category from '@/components/shared/Category';
import Hero from '@/components/shared/Hero';
import React from 'react';
import EarphonePng from '../../assets/product-yx1-earphones/desktop/image-category-page-preview.jpg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getAllProducts } from '@/lib/api/getProducts';
import Loading from '@/components/shared/Loading';
import Link from 'next/link';

const EarphonesPage = () => {
  const { data, isLoading } = getAllProducts('earphones');
  return (
    <>
      <Hero text='EARPHONES' />

      <div className='max-w-6xl p-5 mx-auto my-14 space-y-20'>
        {isLoading && <Loading />}
        {data?.data?.map((el: any) => (
          <section
            key={el?.id}
            className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'
          >
            <div>
              <Image src={EarphonePng} alt='img' />
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
        </section> */}

        <Category />
        <BringCard />
      </div>
    </>
  );
};

export default EarphonesPage;
