import React, { useState } from "react";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/features/Hero";
import ConverterCard from "./components/features/ConverterCard";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toCurrency, setToCurrency] = useState("inr");

  const { rates, loading, error, lastUpdated, convert } = useCurrencyInfo();
  
  // Create an array of available currency codes from the API response
  const currencyOptions = Object.keys(rates).length > 0 ? Object.keys(rates).map(c => c.toLowerCase()) : ['usd', 'inr', 'eur', 'gbp'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0b] text-gray-900 dark:text-gray-100 font-sans selection:bg-blue-500/30 transition-colors flex flex-col relative overflow-hidden">
      
      {/* Background gradients for premium aesthetic */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-400/20 dark:bg-blue-600/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-400/20 dark:bg-indigo-600/10 blur-[120px] pointer-events-none" />
      
      <Navbar lastUpdated={lastUpdated} loading={loading} />
      
      <main className="flex-1 w-full relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col">
        <Hero />
        
        {error ? (
          <div className="max-w-4xl mx-auto w-full p-6 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50 rounded-2xl text-center">
            <h3 className="text-red-800 dark:text-red-400 font-bold text-lg mb-2">Connection Error</h3>
            <p className="text-red-600 dark:text-red-300">{error}</p>
          </div>
        ) : (
          <div className="w-full flex-1 flex flex-col">
            <ConverterCard 
              currencyOptions={currencyOptions}
              fromCurrency={fromCurrency}
              toCurrency={toCurrency}
              setFromCurrency={setFromCurrency}
              setToCurrency={setToCurrency}
              onConvert={convert}
              loading={loading}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
