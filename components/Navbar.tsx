"use client";

export default function Navbar({ data }: { data: { logo: string } }) {
  return <h2>{data.logo}</h2>;
}
