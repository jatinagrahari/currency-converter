import React from 'react';

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center text-center pt-16 pb-12 px-4">
      <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-6 border border-blue-100 dark:border-blue-800/30">
        <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500"></span>
        <span>Enterprise Grade Rates</span>
      </div>
      
      <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-tight max-w-3xl mb-6 transition-colors">
        Convert currencies with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500 dark:from-blue-400 dark:to-indigo-400">absolute precision</span>.
      </h1>
      
      <p className="text-lg text-gray-600 dark:text-zinc-400 max-w-2xl transition-colors">
        Access real-time, mid-market exchange rates across 150+ global currencies. No hidden spreads, just pure mathematical accuracy.
      </p>
    </div>
  );
};

export default Hero;
