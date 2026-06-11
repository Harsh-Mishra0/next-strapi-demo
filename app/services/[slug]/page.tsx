async function getService(slug: string) {
  const res = await fetch(
    "http://localhost:1337/api/services",
    { cache: "no-store" }
  );

  const data = await res.json();

  return data.data.find(
    (s: any) => s.slug === slug
  );
}

export default async function ServicePage({ params }: any) {
  const { slug } = await params;

  const service = await getService(slug);

  if (!service) {
    return (
      <div className="p-10 text-red-500">
        Service not found ❌
      </div>
    );
  }

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        {service.title}
      </h1>

      <p className="text-gray-600 text-lg">
        {service.description}
      </p>

    </div>
  );
}