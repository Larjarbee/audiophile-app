'use client';
import Link from 'next/link';
import React from 'react';
import FacebookSvg from '../../assets/shared/desktop/icon-facebook.svg';
import InstagramSvg from '../../assets/shared/desktop/icon-instagram.svg';
import TwitterSvg from '../../assets/shared/desktop/icon-twitter.svg';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const Footer = () => {
  const pathname = usePathname();
  return (
    <footer className='bg-Black-dark text-Grey-dark'>
      <div className='py-20 max-w-6xl mx-auto px-5 flex justify-between'>
        <div className='space-y-5'>
          <h1 className='text-2xl font-extrabold'>audiophile</h1>
          <h4 className='text-sm opacity-50 max-w-lg'>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </h4>
          <h4 className='text-sm opacity-50'>
            Copyright 2024. All Rights Reserved
          </h4>
        </div>
        <div>
          <div className='flex items-center space-x-8'>
            {LINKS.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={cn(
                  pathname === link.path ? 'text-primary' : '',
                  'text-sm font-normal tracking-widest hover:text-primary'
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className='flex justify-between pt-20'>
            <div className='flex-1' />
            <div className='flex items-center space-x-5'>
              {SOCIALS.map((social, index) => (
                <Image
                  key={index}
                  src={social.icon}
                  alt={social.name}
                  width={20}
                  // className='text-sm font-normal tracking-widest hover:text-primary'
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'HEADPHONES', path: '/headphones' },
  { name: 'SPEAKERS', path: '/speakers' },
  { name: 'EARPHONES', path: '/earphones' },
];

const SOCIALS = [
  { name: 'facebook', icon: FacebookSvg, path: '/#' },
  { name: 'instagram', icon: InstagramSvg, path: '/#' },
  { name: 'twitter', icon: TwitterSvg, path: '/#' },
];
