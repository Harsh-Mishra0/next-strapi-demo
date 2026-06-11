"use client";

import { useState } from "react";

export default function ContactForm({ data }: any) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent successfully 🚀");
  };

  return (
    <div className="py-20 px-8 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 dark:text-white">
          {data.title}
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10">
          {data.subtitle}
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

          <textarea
            placeholder="Your Message"
            required
            rows={4}
            className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
          />

          <button className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}