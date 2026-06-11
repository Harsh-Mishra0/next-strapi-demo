"use client";

import { useState } from "react";

export default function Cards({ cards }: any) {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="py-20 px-8 bg-gray-100 dark:bg-gray-900">
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        Our Features
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        
        {cards.map((card: any) => {
          const data = card.attributes || card;

          const isOpen = activeCard === card.id;

          return (
            <div
              key={card.id}
              onClick={() => {
                console.log("clicked", card.id);
                setActiveCard(isOpen ? null : card.id);
              }}
              className="cursor-pointer p-6 rounded-2xl bg-white dark:bg-gray-800 shadow-lg transition hover:scale-105"
            >
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 dark:text-white">
                {data.title}
              </h3>

              {/* ALWAYS show image */}
              {data.image && (
                <img
                  src={`http://localhost:1337${data.image.url || data.image.data?.attributes?.url}`}
                  alt={data.title}
                  className="rounded-lg mb-4 w-full h-40 object-cover"
                />
              )}

              

              {/* Description */}
              {isOpen && (
                <p className="text-gray-700 dark:text-gray-300 mt-2">
                  {data.description || data.Description}
                </p>
              )}

            </div>
          );
        })}
      </div>
    </div>
  );
}