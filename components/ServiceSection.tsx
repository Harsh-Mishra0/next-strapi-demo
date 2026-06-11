"use client";

import { useEffect, useRef, useState } from "react";

export default function ServiceSection({ service, index }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const isReverse = index % 2 !== 0;

  return (
    <div
      id={service.slug} // 🔥 IMPORTANT (scroll target)
      ref={ref}
      className="py-20 px-8 bg-white dark:bg-gray-900"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* IMAGE */}
        <div
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-x-0"
              : isReverse
              ? "opacity-0 -translate-x-10"
              : "opacity-0 translate-x-10"
          }`}
        >
          {service.image?.url && (
            <img
              src={`http://localhost:1337${service.image.url}`}
              className="rounded-xl w-full h-64 object-cover shadow-lg"
            />
          )}
        </div>

        {/* TEXT */}
        <div
          className={`transition-all duration-700 ${
            visible
              ? "opacity-100 translate-x-0"
              : isReverse
              ? "opacity-0 translate-x-10"
              : "opacity-0 -translate-x-10"
          }`}
        >
          <h2 className="text-3xl font-bold mb-4 dark:text-white">
            {service.title}
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}