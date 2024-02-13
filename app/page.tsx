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
import Category from '@/components/shared/Category';
import BringCard from '@/components/shared/BringCard';

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
          <h1 className='text-6xl font-semibold'>
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

      <div className='max-w-6xl p-5 mx-auto my-14 space-y-20'>
        <Category />

        <section className='background bg-primary rounded-[12px] flex justify-center gap-5 pt-10 flex-col md:flex-row md:gap-20'>
          <div>
            <Image src={SpeakersPng} alt='Speaker' className='mx-auto' />
          </div>
          <div className='space-y-5 pt-0 pb-5 px-5 text-Grey-dark text-center md:text-start md:pt-10'>
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
            <div className='space-y-5 p-5'>
              <h1 className='text-4xl lg:text-5xl'>YX1 EARPHONES</h1>
              <Button variant='outline'>SEE PRODUCT</Button>
            </div>
          </div>
        </section>

        <BringCard />
      </div>
    </>
  );
}

const Categories = [
  { name: 'HEADPHONES', path: '/headphones', img: HeadphonePng },
  { name: 'SPEAKERS', path: '/speakers', img: SpeakerPng },
  { name: 'EARPHONES', path: '/earphones', img: EarphonePng },
];
