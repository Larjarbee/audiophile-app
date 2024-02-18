'use client';
import { Button } from '@/components/ui/button';
import { getProduct } from '@/lib/api/getProducts';
import { useParams } from 'next/navigation';
import React from 'react';
import Headphone2Png from '../../../assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg';
import Image from 'next/image';
import { Minus, Plus } from 'lucide-react';
import BringCard from '@/components/shared/BringCard';
import Category from '@/components/shared/Category';

const SpeakersDetailPage = () => {
  const { id } = useParams();
  const { data } = getProduct(id);

  return (
    <div className='pt-28 pb-10 space-y-20 px-5 max-w-6xl mx-auto'>
      <div>
        <Button variant='ghost'>Go back</Button>

        <section className='grid grid-cols-1 items-center pt-10 gap-20 md:grid-cols-2'>
          <div>
            <Image src={Headphone2Png} alt='img' />
          </div>
          <div className='space-y-5 text-Black-dark max-w-sm'>
            <h2 className='spacing opacity-80 font-light text-sm text-primary'>
              NEW PRODUCT
            </h2>
            <h1 className='text-5xl font-semibold'>{data?.data?.name}</h1>
            <h2 className='opacity-60 text-sm'>{data?.data?.description}</h2>

            <h4 className='font-bold tracking-wider'>${data?.data?.price}</h4>

            <div className='flex items-center gap-3'>
              <div className='flex items-center bg-Grey-dark'>
                <Button variant='ghost'>
                  <Minus width={10} />
                </Button>
                <h6>1</h6>
                <Button variant='ghost'>
                  <Plus width={10} />
                </Button>
              </div>
              <Button>ADD TO CART</Button>
            </div>
          </div>
        </section>
      </div>

      <div className='flex gap-20'>
        <div className='w-[60%] space-y-3'>
          <h1 className='text-3xl font-semibold'>FEATURES</h1>

          <h4 className='opacity-60 text-sm leading-6'>
            {data?.data?.features}
          </h4>
        </div>
        <div className='space-y-3'>
          <h2 className='text-3xl font-semibold uppercase'>in the box</h2>

          {data?.data?.includes?.map((include: any, index: number) => (
            <div
              key={index}
              className='flex items-center opacity-60 text-sm gap-3'
            >
              <h4 className=' text-primary'>{include.quantity}x</h4>
              <h4>{include.item}</h4>
            </div>
          ))}
        </div>
      </div>

      <Category />
      <BringCard />
    </div>
  );
};

export default SpeakersDetailPage;
