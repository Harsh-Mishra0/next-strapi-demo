"use client";

import { useEffect, useState } from "react";

export default function ServiceSubNav({ services }: any) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      services.forEach((s: any) => {
        const el = document.getElementById(s.slug);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActive(s.slug);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [services]);

  const scrollToSection = (slug: string) => {
    const el = document.getElementById(slug);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex gap-6 justify-center py-4 border-b bg-white dark:bg-gray-900 sticky top-[64px] z-40">
      {services.map((s: any) => (
        <button
          key={s.id}
          onClick={() => scrollToSection(s.slug)}
          className={`text-sm transition ${
            active === s.slug
              ? "text-blue-500 font-semibold"
              : "hover:text-blue-500"
          }`}
        >
          {s.title}
        </button>
      ))}
    </div>
  );
}