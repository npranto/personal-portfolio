import React from 'react';

export default function TextSlider({ items = [], className = '' }) {
  return (
    <div className={`text-slider sm:mb-10 ${className}`}>
      {items.map((item) => (
        <h2
          key={item.toString()}
          className="item flex text-2xl md:text-4xl font-extrabold text-red-600 tracking-tight mb-10"
        >
          &lt; {item} /&gt;
        </h2>
      ))}
    </div>
  );
}
