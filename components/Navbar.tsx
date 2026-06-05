import ThemeToggle from "./ThemeToggle";

export default function Navbar({ data }: any) {
  return (
    <div className="flex justify-between items-center px-8 py-4 shadow-md bg-white dark:bg-gray-900 dark:text-white sticky top-0 z-50">
      
      <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400">
        {data.logo}
      </h2>

      <div className="flex items-center gap-6">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <ThemeToggle />
      </div>
    </div>
  );
}