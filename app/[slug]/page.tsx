import BlockRenderer from "../BlockRenderer";
import ServiceSection from "../../components/ServiceSection";
import ServiceSubNav from "../../components/ServiceSubNav";

async function getPage(slug: string) {
  const res = await fetch("http://localhost:1337/api/pages?populate=*");
  const data = await res.json();
  return data.data.find((p: any) => p.slug === slug);
}

async function getServices() {
  const res = await fetch(
    "http://localhost:1337/api/services?populate=image"
  );
  const data = await res.json();
  return data.data;
}

export default async function Page({ params }: any) {
  const { slug } = await params;

  const page = await getPage(slug);
  const services = await getServices();

  if (!page) return <div>Page not found</div>;

  const navbarBlock = page.content.filter(
    (b: any) => b.__component === "layout.navbar"
  );

  const restBlocks = page.content.filter(
    (b: any) => b.__component !== "layout.navbar"
  );

  const footerBlock = restBlocks.filter(
    (b: any) => b.__component === "sections.footer"
  );

  const mainBlocks = restBlocks.filter(
    (b: any) => b.__component !== "sections.footer"
  );

  return (
    <main className="min-h-screen">

      {/* Navbar */}
      <BlockRenderer blocks={navbarBlock} />

      {/* 🔥 Services SubNav */}
      {slug === "services" && (
        <ServiceSubNav services={services} />
      )}

      {/* Page Content */}
      <BlockRenderer blocks={mainBlocks} />

      {/* 🔥 Services Sections */}
      {slug === "services" &&
        services.map((service: any, index: number) => (
          <ServiceSection
            key={service.id}
            service={service}
            index={index}
          />
        ))}

      {/* Footer */}
      <BlockRenderer blocks={footerBlock} />

    </main>
  );
}