import BlockRenderer from "./BlockRenderer";
import Footer from "../components/Footer";

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

  if (!page) return <div>Loading...</div>;

  return (
    <main className="min-h-screen">
      <BlockRenderer blocks={page.content} />
      <Footer />
    </main>
  );
}