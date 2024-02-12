import Image from 'next/image';
import HeroPng from '../assets/home/desktop/image-hero.jpg';
import HeadphonePng from '../assets/shared/desktop/image-category-thumbnail-headphones.png';
import SpeakerPng from '../assets/shared/desktop/image-category-thumbnail-speakers.png';
import EarphonePng from '../assets/shared/desktop/image-category-thumbnail-earphones.png';
import SpeakersPng from '../assets/home/desktop/image-speaker-zx9.png';
import SpeakerZxPng from '../assets/home/desktop/image-speaker-zx7.jpg';
import EarphoneZxPng from '../assets/home/desktop/image-earphones-yx1.jpg';
import ManPng from '../assets/shared/desktop/image-best-gear.jpg';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <section className='relative'>
        <Image
          src={HeroPng}
          sizes='100vw'
          style={{
            width: '100%',
            height: 'auto',
          }}
          alt='hero'
        />

        <div className='absolute space-y-5 top-[30%] left-40 text-Grey-dark'>
          <h2 className='spacing opacity-40 font-light text-sm'>NEW PRODUCT</h2>
          <h1 className=' text-6xl font-semibold'>
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>
          <h2 className='opacity-70'>
            Experience natural, lifelike audio and exceptional
            <br /> build quality made for the passionate music
            <br /> enthusiast.
          </h2>

          <Button>SEE PRODUCT</Button>
        </div>
      </section>

      <div className='max-w-6xl mx-auto my-28 space-y-20'>
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

        <section className='background bg-primary rounded-[12px] flex justify-center gap-20 pt-10'>
          <div>
            <Image src={SpeakersPng} alt='Speaker' className='mx-auto' />
          </div>
          <div className='space-y-5 pt-10 text-Grey-dark'>
            <h1 className=' text-6xl font-semibold'>
              ZX9
              <br />
              SPEAKER
            </h1>
            <h2 className='opacity-80 text-sm'>
              Upgrade to premium speakers that are
              <br /> phenomenally built to deliver truly remarkable
              <br /> sound.
            </h2>

            <Button variant='secondary'>SEE PRODUCT</Button>
          </div>
        </section>

        <section className='relative rounded-[12px] overflow-hidden'>
          <Image
            src={SpeakerZxPng}
            sizes='100vw'
            style={{
              width: '100%',
              height: 'auto',
            }}
            alt='speaker'
          />

          <div className='absolute space-y-5 top-[30%] left-40 text-Black-dark'>
            <h1 className=' text-5xl'>ZX7 SPEAKER</h1>
            <Button variant='outline'>SEE PRODUCT</Button>
          </div>
        </section>

        <section className='grid grid-cols-1 items-center gap-5 md:grid-cols-2'>
          <div>
            <Image
              src={EarphoneZxPng}
              alt='Earphone'
              className='mx-auto rounded-[12px]'
            />
          </div>
          <div className='rounded-[12px] bg-Grey-dark h-full flex flex-col items-center justify-center'>
            <div className='space-y-5'>
              <h1 className=' text-5xl'>YX1 EARPHONES</h1>
              <Button variant='outline'>SEE PRODUCT</Button>
            </div>
          </div>
        </section>

        <section className='grid grid-cols-1 items-center gap-5 md:grid-cols-2'>
          <div className='flex flex-col '>
            <div className='space-y-5 max-w-[400px]'>
              <h2 className='text-4xl font-semibold tracking-wider uppercase'>
                Bringing you the
                <br /> <span className='text-primary'>best</span> audio gear
              </h2>
              <h6 className='text-sm leading-6 opacity-60'>
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
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
      </div>
    </>
  );
}

const Categories = [
  { name: 'HEADPHONES', path: '/headphones', img: HeadphonePng },
  { name: 'SPEAKERS', path: '/speakers', img: SpeakerPng },
  { name: 'EARPHONES', path: '/earphones', img: EarphonePng },
];
