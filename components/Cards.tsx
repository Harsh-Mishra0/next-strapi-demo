export default function Cards({ data }: any) {
  return (
    <div className="py-20 px-8 bg-gray-100 dark:bg-gray-900">
      
      <h2 className="text-4xl font-bold text-center mb-12 dark:text-white">
        {data.title}
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {data.cards?.map((card: any) => (
          
          <div
            key={card.id}
            className="p-6 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-gray-800/40 border border-white/40 shadow-lg hover:scale-105 transition"
          >

            {card.image && (
              <img
                src={`http://localhost:1337${card.image.url}`}
                alt={card.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            )}

            <h3 className="text-xl font-semibold mb-3 dark:text-white">
              {card.title}
            </h3>

            <p className="text-gray-700 dark:text-gray-300">
              {card.description}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
}