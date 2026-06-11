"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ data }: any) {
  const [services, setServices] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);

    fetch("http://localhost:1337/api/services")
      .then((res) => res.json())
      .then((res) => setServices(res.data || []));
  }, []);

  if (!mounted) return null;

  const filteredServices =
    search === ""
      ? services
      : services.filter((s) =>
          s.title.toLowerCase().includes(search.toLowerCase())
        );

  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-50">

      {/* LOGO */}
      <h2 className="text-xl font-bold text-blue-600">
        {data.logo}
      </h2>

      {/* 🔥 NAV LINKS */}
      <div className="relative flex items-center gap-8">

       

        {/* HOME */}
        <Link
          href="/"
          className={`relative transition duration-200 hover:text-blue-500 ${
            pathname === "/" ? "text-blue-500 font-semibold" : ""
          }`}
        >
          Home
        </Link>

        {/* ABOUT */}
        <Link
          href="/about"
          className={`relative transition duration-200 hover:text-blue-500 ${
            pathname === "/about" ? "text-blue-500 font-semibold" : ""
          }`}
        >
          About
        </Link>

        {/* CONTACT */}
        <Link
          href="/contact"
          className={`relative transition duration-200 hover:text-blue-500 ${
            pathname === "/contact" ? "text-blue-500 font-semibold" : ""
          }`}
        >
          Contact
        </Link>

        {/* SERVICES */}
        {pathname !== "/services" && (
          <div
            className="relative"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => {
              setTimeout(() => {
                if (search === "") setShowDropdown(false);
              }, 200);
            }}
          >
            <Link
              href="/services"
              className={`transition duration-200 hover:text-blue-500 ${
                pathname === "/services"
                  ? "text-blue-500 font-semibold"
                  : ""
              }`}
            >
              Services
            </Link>

            {/* 🔥 DROPDOWN */}
            <div
              onMouseEnter={() => setShowDropdown(true)}
              className={`absolute top-10 left-0 w-52 text-sm bg-white dark:bg-gray-800 shadow-xl rounded-lg p-3 transition-all duration-300 origin-top z-50 ${
                showDropdown
                  ? "opacity-100 scale-y-100"
                  : "opacity-0 scale-y-0 pointer-events-none"
              }`}
            >
              {filteredServices.length > 0 ? (
                filteredServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services/${service.slug}`}
                    className="block py-2 px-3 rounded hover:bg-gray-100 dark:hover:bg-gray-700 transition"
                  >
                    {service.title}
                  </Link>
                ))
              ) : (
                <div className="text-gray-400 text-xs">
                  No results
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-4">

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setShowDropdown(true);
          }}
          className="px-3 py-1 border rounded-lg text-black text-sm w-32 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* THEME */}
        <ThemeToggle />

      </div>
    </div>
  );
}