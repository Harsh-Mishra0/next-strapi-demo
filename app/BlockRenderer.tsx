import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Cards from "../components/Cards";

export default function BlockRenderer({ blocks }: any) {
  return (
    <>
      {blocks.map((block: any, index: number) => {
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
    </>
  );
}