import React from 'react';
import Image from 'next/image';
import HeadphonePng from '../../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerPng from '../../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonePng from '../../assets/shared/desktop/image-category-thumbnail-earphones.png';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

const Category = () => {
  return (
    <section className='grid grid-cols-1 gap-5 items-center md:grid-cols-3'>
      {Categories.map((category, index) => (
        <div
          key={index}
          className='text-center rounded-[10px] h-full bg-Grey-dark p-5'
        >
          <Image
            src={category.img}
            alt={category.name}
            width={200}
            className='mx-auto'
          />
          <h4 className=' font-semibold'>{category.name}</h4>

          <Link
            href='/'
            className='flex justify-center gap-1 pt-2 text-sm items-center'
          >
            <h4 className=' opacity-50'>SHOP</h4>
            <ChevronRight className=' text-primary' size={20} />
          </Link>
        </div>
      ))}
    </section>
  );
};

export default Category;

const Categories = [
  { name: 'HEADPHONES', path: '/headphones', img: HeadphonePng },
  { name: 'SPEAKERS', path: '/speakers', img: SpeakerPng },
  { name: 'EARPHONES', path: '/earphones', img: EarphonePng },
];
