import { ReactNode } from 'react';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <div className="container mx-auto px-4">
          {children}
        </div>
      </main>
      <footer className="py-6 mt-8">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p className="text-sm">&copy; {new Date().getFullYear()} Komoti. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout; 