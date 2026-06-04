"use client";

export default function Hero({ data }: {
  data: { title: string; subtitle: string; buttonText: string }
}) {
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.subtitle}</p>
      <button>{data.buttonText}</button>
    </div>
  );
}