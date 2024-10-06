import React from 'react';
import Tooltip from './Tooltip';

export default function TechInfo ({ technical }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-4">Informações Técnicas</h2>
      <p className="text-lg inline-flex gap-1">
        <strong>Volume:</strong> {technical.volume}{' '}
        <Tooltip term="Volume" explanation="Quantidade de líquido na garrafa." />
      </p>
      <p className="text-lg inline-flex gap-1">
        <strong>Graduação Alcoólica:</strong> {technical.alcohol}{' '}
        <Tooltip term="Graduação Alcoólica" explanation="Percentual de álcool no vinho." />
      </p>
      <p className="text-lg inline-flex gap-1">
        <strong>Classificação:</strong> {technical.classification}{' '}
        <Tooltip term="Classificação" explanation="Indica se o vinho é seco, suave, doce, etc." />
      </p>
    </div>
  );
};

