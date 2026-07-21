import React from 'react';
import ThemeToggle from '../ui/ThemeToggle';
import { IoSwapHorizontal } from 'react-icons/io5';
import { formatTimestamp } from '../../utils/format';

const Navbar = ({ lastUpdated, loading }) => {
  return (
    <nav className="w-full h-20 border-b border-gray-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/20">
            <IoSwapHorizontal className="text-white text-2xl font-bold" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white hidden sm:block">
            ExchangeX
          </span>
        </div>

        {/* Status & Controls */}
        <div className="flex items-center space-x-6">
          
          <div className="hidden md:flex flex-col items-end">
            <div className="flex items-center space-x-1.5">
              <span className="relative flex h-2.5 w-2.5">
                {!loading && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>}
                <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${loading ? 'bg-yellow-400' : 'bg-green-500'}`}></span>
              </span>
              <span className="text-sm font-medium text-gray-700 dark:text-zinc-300">
                {loading ? 'Connecting...' : 'Live Market'}
              </span>
            </div>
            <span className="text-xs text-gray-500 dark:text-zinc-500">
              {lastUpdated ? `Updated ${formatTimestamp(lastUpdated)}` : 'Fetching rates...'}
            </span>
          </div>

          <div className="h-8 w-px bg-gray-200 dark:bg-zinc-800 hidden md:block"></div>
          
          <ThemeToggle />
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
