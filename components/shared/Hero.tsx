import React from 'react';

const Hero = ({ text }: { text: string }) => {
  return (
    <div className='text-center bg-Black-dark text-Grey-dark'>
      <h2 className='pt-48 pb-24 text-4xl font-semibold'>{text}</h2>
    </div>
  );
};

export default Hero;
