import React from 'react';
import Tooltip from './Tooltip';

export default function SensoryInfo ({ sensory }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4 flex flex-col gap-3">
      <h2 className="text-2xl font-bold mb-4">Informações Sensoriais</h2>
      <p className="text-lg inline-flex gap-1">
        <strong>Visual:</strong> {sensory.visual}{' '}
        <Tooltip explanation="A cor e intensidade visual do vinho." />
      </p>
      <p className="text-lg inline-flex gap-1">
        <strong>Gustativa:</strong> {sensory.gustative}{' '}
        
        <Tooltip explanation="Sensações no paladar, como taninos, acidez, persistência." />
      </p>
      <p className="text-lg inline-flex gap-1">
        <strong>Olfativa:</strong> {sensory.olfactory}{' '}
        <Tooltip explanation="Aromas primários, secundários e terciários percebidos no vinho." />
      </p>
      <p className="text-lg inline-flex gap-1">
        <strong>Harmonização:</strong> Orna bem com {sensory.pairing}{' '}
        <Tooltip explanation="Sugestões de pratos que combinam com este vinho." />
      </p>
      <p className="text-lg inline-flex gap-1">
        <strong>Temperatura de Serviço:</strong> A temperatura ideal de consumo é {sensory.servingTemperature}{' '}
        <Tooltip explanation="A temperatura ideal para servir o vinho." />
      </p>
    </div>
  );
};
