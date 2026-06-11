export default function Footer({ data }: any) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-8 mt-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

        {/* LOGO */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            {data.title}
          </h2>
          <p className="text-gray-400">
            {data.description || "Modern web solutions"}
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>

          <div className="flex flex-col gap-2 text-gray-400">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/about" className="hover:text-white">About</a>
            <a href="/services" className="hover:text-white">Services</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="font-semibold mb-4">Contact</h3>

          <p className="text-gray-400">mharsh0304@gmail.com</p>
          <p className="text-gray-400 mt-2">Gorakhpur, India</p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-500 mt-10 text-sm">
        {data.copyright}
      </div>
    </footer>
  );
}