import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getCurrentUser } from '../data/users';
import { User } from '../types';

const Header = () => {
  // In a real application, this is where authentication will be checked
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const [userImgLoaded, setUserImgLoaded] = useState(true);

  // Authentication check simulation
  useEffect(() => {
    // Authentication check will be done here
    // For demonstration, we assume the user is authenticated
    setIsLoggedIn(true);
    setUser(getCurrentUser());
  }, []);

  const handleImgError = () => {
    setUserImgLoaded(false);
  };

  return (
    <header className="py-4 border-b border-gray-200">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-[30.67px] font-black text-black">
            Komoti
          </Link>
          
          <nav className="ml-8 hidden md:flex space-x-6">
            <Link href="/" className="text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
          </nav>
        </div>
        
        <div className="flex flex-1 max-w-xl mx-10">
          <div className="relative flex w-full border border-black rounded-full overflow-hidden">
            <div className="flex items-center justify-between w-full px-6">
              <button className="py-2 font-medium text-[13px]">
                Choose a game
              </button>
              <div className="h-[30px] w-[1px] bg-black"></div>
              <button className="py-2 font-medium text-[13px]">
                Enter location
              </button>
              <div className="h-[30px] w-[1px] bg-black"></div>
              <button className="py-2 font-medium text-[13px]">
                Pick a date
              </button>
            </div>
            <button className="bg-black p-3 rounded-full text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <div className="flex gap-4 items-center">
          {isLoggedIn && user ? (
            <div className="flex items-center gap-3">
              <Link href="/profile" className="flex items-center gap-2 hover:text-green-600 transition-colors">
                <div className="w-8 h-8 rounded-full overflow-hidden border border-gray-200">
                  {userImgLoaded ? (
                    <img 
                      src={user.photo} 
                      alt={user.name}
                      className="w-full h-full object-cover"
                      onError={handleImgError}
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500 text-xs">{user.name.charAt(0)}</span>
                    </div>
                  )}
                </div>
                <span className="text-[13px] font-medium hidden sm:inline">{user.name}</span>
              </Link>
            </div>
          ) : (
            <div className="relative h-[30px] w-[153px]">
              <div className="absolute inset-0 border border-black rounded-full"></div>
              <div className="absolute inset-0 w-[84px] bg-black rounded-full border border-black">
                <Link href="/register" className="absolute h-full w-full flex items-center justify-center text-white font-medium text-[13px]">
                  Register
                </Link>
              </div>
              <Link href="/login" className="absolute inset-0 right-0 w-[70px] ml-[84px] flex items-center justify-center text-black font-medium text-[13px]">
                Log In
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 