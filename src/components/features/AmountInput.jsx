import React from 'react';

const AmountInput = ({ 
  label, 
  amount, 
  onAmountChange, 
  disabled = false, 
  readOnly = false 
}) => {
  return (
    <div className="flex flex-col space-y-1.5 w-full">
      <label className="text-sm font-semibold text-gray-500 dark:text-zinc-400">
        {label}
      </label>
      <input
        type="number"
        value={amount === 0 ? '' : amount}
        onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
        placeholder="0.00"
        disabled={disabled}
        readOnly={readOnly}
        className={`w-full px-4 py-3 bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-xl text-gray-900 dark:text-white font-bold text-2xl outline-none focus:ring-2 focus:ring-blue-500 transition-colors placeholder:text-gray-300 dark:placeholder:text-zinc-700 ${readOnly ? 'bg-gray-50 dark:bg-zinc-900/50 cursor-default focus:ring-0' : 'hover:border-gray-400 dark:hover:border-zinc-600'}`}
      />
    </div>
  );
};

export default AmountInput;
