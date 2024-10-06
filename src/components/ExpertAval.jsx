import React from 'react';

export default function ExpertAval ({ expert }) {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Análise</h2>
      <p className="text-lg"><strong><i>"{expert.comment}"</i></strong></p>
      <p><i> - {expert.label}</i></p>
    </div>
  );
};
