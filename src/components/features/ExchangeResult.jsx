import React, { useState } from 'react';
import { IoCopyOutline, IoCheckmarkOutline } from 'react-icons/io5';
import { formatCurrency, formatNumber } from '../../utils/format';

const ExchangeResult = ({ amount, convertedAmount, fromCurrency, toCurrency, rate }) => {
  const [copied, setCopied] = useState(false);

  if (!amount || amount === 0) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(formatNumber(convertedAmount));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="mt-8 p-6 bg-blue-50 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 flex flex-col md:flex-row md:items-center justify-between gap-6 transition-colors">
      
      <div className="flex flex-col">
        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-1 uppercase tracking-wider">
          {formatNumber(amount)} {fromCurrency.toUpperCase()} =
        </p>
        <div className="flex items-end gap-2">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            {formatNumber(convertedAmount)}
          </h2>
          <span className="text-2xl font-bold text-gray-500 dark:text-zinc-500 mb-1">
            {toCurrency.toUpperCase()}
          </span>
        </div>
        
        <p className="text-sm text-gray-500 dark:text-zinc-400 mt-2 font-medium">
          1 {fromCurrency.toUpperCase()} = {formatNumber(rate)} {toCurrency.toUpperCase()}
        </p>
      </div>

      <button
        onClick={handleCopy}
        className="self-start md:self-center flex items-center gap-2 px-4 py-2 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg text-sm font-semibold text-gray-700 dark:text-zinc-300 hover:bg-gray-50 dark:hover:bg-zinc-700 transition-all shadow-sm active:scale-95"
      >
        {copied ? (
          <>
            <IoCheckmarkOutline className="text-green-500 text-lg" /> Copied
          </>
        ) : (
          <>
            <IoCopyOutline className="text-lg" /> Copy Amount
          </>
        )}
      </button>

    </div>
  );
};

export default ExchangeResult;
