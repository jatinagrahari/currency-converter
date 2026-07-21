import React, { useState } from 'react';
import CurrencySelect from './CurrencySelect';
import AmountInput from './AmountInput';
import SwapButton from './SwapButton';
import ExchangeResult from './ExchangeResult';

const ConverterCard = ({ 
  currencyOptions, 
  onConvert, 
  fromCurrency, 
  toCurrency, 
  setFromCurrency, 
  setToCurrency,
  loading
}) => {
  const [amount, setAmount] = useState(1000);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [currentRate, setCurrentRate] = useState(0);

  const handleConvert = (e) => {
    e.preventDefault();
    if (amount <= 0) return;
    
    const result = onConvert(amount, fromCurrency, toCurrency);
    setConvertedAmount(Number(result.toFixed(2)));
    
    // Calculate the single unit rate for display
    const rate = onConvert(1, fromCurrency, toCurrency);
    setCurrentRate(rate);
  };

  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    // Auto convert after swap
    const result = onConvert(amount, toCurrency, fromCurrency);
    setConvertedAmount(Number(result.toFixed(2)));
    const rate = onConvert(1, toCurrency, fromCurrency);
    setCurrentRate(rate);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-gray-200 dark:border-zinc-800 rounded-3xl p-6 sm:p-10 shadow-2xl shadow-blue-500/5 transition-all">
      <form onSubmit={handleConvert}>
        
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* FROM SECTION */}
          <div className="flex-1 w-full bg-gray-50/50 dark:bg-zinc-800/30 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <CurrencySelect 
              label="Amount"
              currencyOptions={currencyOptions}
              selectCurrency={fromCurrency}
              onCurrencyChange={setFromCurrency}
            />
            <div className="mt-4">
              <AmountInput 
                amount={amount}
                onAmountChange={setAmount}
              />
            </div>
          </div>

          <SwapButton onSwap={handleSwap} />

          {/* TO SECTION */}
          <div className="flex-1 w-full bg-gray-50/50 dark:bg-zinc-800/30 p-4 rounded-2xl border border-gray-100 dark:border-zinc-800">
            <CurrencySelect 
              label="Converted to"
              currencyOptions={currencyOptions}
              selectCurrency={toCurrency}
              onCurrencyChange={setToCurrency}
            />
            <div className="mt-4">
              <AmountInput 
                amount={convertedAmount}
                readOnly={true}
              />
            </div>
          </div>
        </div>

        {/* Convert Action */}
        <div className="mt-8 flex justify-end">
          <button
            type="submit"
            disabled={loading || amount <= 0}
            className="w-full sm:w-auto px-10 py-4 bg-gray-900 hover:bg-black dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold text-lg rounded-xl shadow-lg transition-all active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
          >
            {loading ? 'Fetching Rates...' : 'Convert Currency'}
          </button>
        </div>

      </form>

      {/* Result Display */}
      {convertedAmount > 0 && (
        <ExchangeResult 
          amount={amount}
          convertedAmount={convertedAmount}
          fromCurrency={fromCurrency}
          toCurrency={toCurrency}
          rate={currentRate}
        />
      )}
    </div>
  );
};

export default ConverterCard;
