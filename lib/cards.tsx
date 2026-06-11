const BASE_URL = "http://localhost:1337";

export async function getCards() {
  const res = await fetch(
    `${BASE_URL}/api/cards?populate=*`,
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.data;
}