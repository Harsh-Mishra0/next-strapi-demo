"use client";
import { motion } from "framer-motion";

export default function Hero({ data }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-center py-24 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white dark:from-gray-900 dark:to-black"
    >
      <h1 className="text-5xl font-bold mb-6">{data.title}</h1>
      <p className="text-lg mb-8">{data.subtitle}</p>

      <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition">
        {data.buttonText}
      </button>
    </motion.div>
  );
}