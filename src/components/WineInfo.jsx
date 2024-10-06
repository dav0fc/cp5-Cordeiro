import React from 'react';
import WineImg from './WineImg';
import CartButton from './CartButton';

export default function WineInfo({ wine }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h1 className="text-3xl font-bold mb-2">{wine.name}</h1>
      <div className='flex flex-row justify-around'>
        <WineImg images={wine.images} />
        <div>
        <p className="text-lg"><strong>Vinícola:</strong> {wine.winery}</p>
        <p className="text-lg"><strong>Tipo de vinho:</strong> {wine.type}</p>
        <p className="text-lg"><strong>Uva(s):</strong> {wine.grapes}</p>
        <p className="text-lg"><strong>Safra:</strong> {wine.vintage}</p>
        <p className="text-lg"><strong>Região:</strong> {wine.region}</p>
        <p className="text-xl font-semibold mt-4">Preço: R$ {wine.price}</p>
        <CartButton />
        </div>
        
      </div>

    </div>
  );
};

