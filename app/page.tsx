import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline';

function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20" />

      <h1 className="text-3xl mt-2 text-black font-bold mb-5 text-center">
        Welcome to the Amazon Web Scraper
      </h1>

      <h2 className="text-lg italic text-black/50 text-center">
        To learn how to code from ZERO experience, join ZERO TO FULL STACK HERO
      </h2>

      <h3 className="text-lg text-center italic text-black/50">
        https://www.jimmyreact.com/course
      </h3>
    </div>
  );
}

export default HomePage;
