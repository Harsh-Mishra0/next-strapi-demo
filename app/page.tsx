import BlockRenderer from "./BlockRenderer";
import Cards from "../components/Cards";
import { getCards } from "@/lib/cards";

async function getPage() {
  const res = await fetch(
    "http://localhost:1337/api/pages?filters[slug][$eq]=home&populate=*",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.data?.[0];
}

export default async function Home() {
  const page = await getPage();
  const cards = await getCards();

  if (!page) return <div>Loading...</div>;

  const nonFooterBlocks = page.content.filter(
    (block: any) => block.__component !== "sections.footer"
  );

  const footerBlock = page.content.filter(
    (block: any) => block.__component === "sections.footer"
  );

  return (
    <main className="min-h-screen">
      {/* Navbar + Hero */}
      <BlockRenderer blocks={nonFooterBlocks} />

      {/* Cards */}
      <Cards cards={cards} />

      {/* Footer */}
      <BlockRenderer blocks={footerBlock} />
    </main>
  );
}