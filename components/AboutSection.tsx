"use client";

import { useEffect, useRef, useState } from "react";

export default function AboutSection({ data }: any) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-gray-900 py-20 px-8"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        
        {/* LEFT */}
        <h2
          className={`text-5xl font-serif text-gray-900 dark:text-white transition-all duration-700 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
          }`}
        >
          {data.title}
        </h2>

        {/* RIGHT */}
        <div
          className={`transition-all duration-700 delay-200 ${
            visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
            {data.subtitle}
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
            {data.buttonText}
          </button>
        </div>

      </div>
    </div>
  );
}