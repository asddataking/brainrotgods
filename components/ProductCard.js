'use client';

import { useState } from 'react';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleBuyClick = async () => {
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product.id,
          productName: product.name,
          price: product.price,
        }),
      });

      const { url } = await response.json();
      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error('Error creating checkout session:', error);
      alert('Something went wrong! Please try again.');
    }
  };

  return (
    <div 
      className="brainrot-card p-6 text-center transform transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-2xl mb-4">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-48 object-cover transition-transform duration-300"
          style={{
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
      </div>
      
      <h3 className="text-xl font-bold text-gray-800 mb-2 font-brainrot">
        {product.name}
      </h3>
      
      <p className="text-gray-600 text-sm mb-3 line-clamp-2">
        {product.description}
      </p>
      
      <div className="text-2xl font-bold text-brainrot-purple mb-4 font-brainrot">
        ${product.price}
      </div>
      
      <button 
        onClick={handleBuyClick}
        className="brainrot-button w-full"
      >
        🛒 Buy Now!
      </button>
    </div>
  );
}
