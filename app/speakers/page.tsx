'use client';
import BringCard from '@/components/shared/BringCard';
import Category from '@/components/shared/Category';
import Hero from '@/components/shared/Hero';
import React from 'react';
import SpeakerPng from '../../assets/product-zx7-speaker/desktop/image-category-page-preview.jpg';
import Speaker1Png from '../../assets/product-zx9-speaker/desktop/image-category-page-preview.jpg';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getAllProducts } from '@/lib/api/getProducts';
import Loading from '@/components/shared/Loading';
import Link from 'next/link';

const SpeakersPage = () => {
  const { data, isLoading } = getAllProducts('speakers');
  console.log(data);

  return (
    <>
      <Hero text='SPEAKERS' />

      <div className='max-w-6xl p-5 mx-auto my-14 space-y-20'>
        {isLoading && <Loading />}
        {data?.data?.map((el: any) => (
          <section
            key={el?.id}
            className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'
          >
            <div>
              <Image src={SpeakerPng} alt='img' />
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
            <Image src={Speaker1Png} alt='img' />
          </div>
          <div className='space-y-5 text-Black-dark'>
            <h2 className='spacing opacity-80 font-light text-sm text-primary'>
              NEW PRODUCT
            </h2>
            <h1 className='text-5xl font-semibold'>
              ZX9
              <br />
              SPEAKER
            </h1>
            <h2 className='opacity-60 text-sm'>
              Upgrade your sound system with the all new ZX9 active
              <br />
              speaker. It’s a bookshelf speaker system that offers truly
              <br /> wireless connectivity -- creating new possibilities for
              more
              <br />
              pleasing and practical audio setups.
            </h2>

            <Button>SEE PRODUCT</Button>
          </div>
        </section>

        <section className='grid grid-cols-1 items-center gap-20 md:grid-cols-2'>
          <div className='space-y-5 text-Black-dark'>
            <h1 className='text-5xl font-semibold'>
              ZX7
              <br />
              SPEAKER
            </h1>
            <h2 className='opacity-60 text-sm'>
              Stream high quality sound wirelessly with minimal loss. The ZX7
              <br />
              bookshelf speaker uses high-end audiophile components that
              <br /> represents the top of the line powered speakers for home or
              in studio-quality
              <br />
              studio use.
            </h2>

            <Button>SEE PRODUCT</Button>
          </div>

          <div>
            <Image src={SpeakerPng} alt='img' />
          </div>
        </section> */}

        <Category />
        <BringCard />
      </div>
    </>
  );
};

export default SpeakersPage;
