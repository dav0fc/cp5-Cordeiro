import React from 'react';

export default function Reviews ({ reviews }) {
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md my-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Comentários</h2>
      {reviews.map((review, index) => (
        <div key={index} className="mb-4 border-b pb-4">
          <p className="text-lg"><strong>{review.user}</strong> — {review.rating} estrelas</p>
          <p className="text-gray-700">{review.comment}</p>
        </div>
      ))}
    </div>
  );
};
