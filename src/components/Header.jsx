import React from 'react';

export default function Header () {
  return (
    <header className="bg-[#712b31] text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#">
          <div className="text-2xl font-bold transition-transform duration-200 active:scale-90">Vinheria Agnello</div>
          </a>
        <nav>
          <ul className="flex space-x-4">
            <li className='transition-transform duration-200 active:scale-90 active:text-black'
            ><a href="#" className="hover:underline">Países e Regiões</a></li>
            <li className='transition-transform duration-200 active:scale-90 active:text-black'>
              <a href="#" className="hover:underline">Uvas</a></li>
            <li className='transition-transform duration-200 active:scale-90 active:text-black'>
              <a href="#" className="hover:underline">Kits</a></li>
            <li className='transition-transform duration-200 active:scale-90 active:text-black'>
              <a href="#" className="hover:underline">Promoções</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

