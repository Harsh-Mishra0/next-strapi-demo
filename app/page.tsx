import Navbar from "../components/Navbar";  // ✅ goes up to root, then into components/
import Hero from "../components/Hero";
import Cards from "../components/Cards";
async function getPage() {
  const res = await fetch(
    "http://localhost:1337/api/pages?populate[content][populate]=*",
    { cache: "no-store" }
  );

  const data = await res.json();
  return data.data?.[0];
}

export default async function Home() {
  const page = await getPage();

  if (!page || !page.content) {
    return <div>Loading...</div>;
  }

  return (
    <main>
      {page.content.map((block: any, index: number) => {
        if (block.__component === "layout.navbar") {
          return <Navbar key={index} data={block} />;
        }

        if (block.__component === "sections.hero") {
          return <Hero key={index} data={block} />;
        }

        if (block.__component === "sections.cards") {
          return <Cards key={index} data={block} />;
        }

        return null;
      })}
    </main>
  );
}