import Link from 'next/link';
import React from 'react';
import CartSvg from '../../assets/shared/desktop/icon-cart.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='bg-Black-dark text-Grey-dark fixed w-full z-10'>
      <nav className='py-6 max-w-6xl mx-auto border-b flex justify-between items-center px-5'>
        <h1 className='text-2xl font-extrabold'>audiophile</h1>
        <div className='flex items-center space-x-8'>
          {LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className='text-sm font-normal tracking-widest hover:text-primary'
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div>
          <Image
            src={CartSvg}
            width={20}
            height={20}
            alt='cart'
            className=' hover:scale-125 transition-all'
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;

const LINKS = [
  { name: 'HOME', path: '/' },
  { name: 'HEADPHONES', path: '/headphones' },
  { name: 'SPEAKERS', path: '/speakers' },
  { name: 'EARPHONES', path: '/earphones' },
];
