import React from 'react';
import { getFlagUrl } from '../../constants/currencies';
import { IoChevronDownOutline, IoGlobeOutline } from 'react-icons/io5';

const CurrencySelect = ({ 
  label, 
  currencyOptions = [], 
  selectCurrency = 'usd', 
  onCurrencyChange, 
  disabled = false 
}) => {
  const flagUrl = getFlagUrl(selectCurrency);

  return (
    <div className="flex flex-col space-y-1.5">
      <label className="text-sm font-semibold text-gray-500 dark:text-zinc-400">
        {label}
      </label>
      
      <div className="relative group flex items-center">
        {/* Flag Icon */}
        <div className="absolute left-3 w-6 h-6 rounded-full overflow-hidden bg-gray-200 dark:bg-zinc-800 flex items-center justify-center border border-gray-300 dark:border-zinc-700">
          {flagUrl ? (
            <img src={flagUrl} alt={`${selectCurrency} flag`} className="w-full h-full object-cover" />
          ) : (
            <IoGlobeOutline className="text-gray-400 text-sm" />
          )}
        </div>

        <select
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={disabled}
          className="w-full pl-11 pr-10 py-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white font-semibold text-lg appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-400 dark:hover:border-zinc-600 transition-colors disabled:opacity-50"
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
        
        {/* Custom Chevron */}
        <div className="absolute right-3 pointer-events-none text-gray-500 dark:text-zinc-500 group-hover:text-blue-600 transition-colors">
          <IoChevronDownOutline className="text-lg" />
        </div>
      </div>
    </div>
  );
};

export default CurrencySelect;
