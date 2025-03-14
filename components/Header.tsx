import Link from 'next/link';

const Header = () => {
  return (
    <header className="py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-black">
          Komoti
        </Link>
        
        <div className="flex flex-1 max-w-xl mx-10">
          <div className="relative flex w-full border rounded-full overflow-hidden">
            <button className="px-4 py-2 border-r hover:bg-gray-100 transition-colors">
              Choose a game
            </button>
            <button className="px-4 py-2 border-r hover:bg-gray-100 transition-colors">
              Enter location
            </button>
            <button className="px-4 py-2 hover:bg-gray-100 transition-colors">
              Pick a date
            </button>
            <button className="bg-black p-3 rounded-full text-white ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Link href="/register" className="bg-black text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Register
          </Link>
          <Link href="/login" className="px-4 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
            Log In
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header; 