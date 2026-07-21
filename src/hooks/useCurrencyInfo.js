import { useState, useEffect, useCallback } from 'react';
import { fetchLatestRates } from '../services/currencyApi';

export default function useCurrencyInfo() {
  const [rates, setRates] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  const fetchRates = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const result = await fetchLatestRates();
      // The API returns { meta: { last_updated_at }, data: { USD: { value: 1 }, ... } }
      setRates(result.data || {});
      if (result.meta && result.meta.last_updated_at) {
        setLastUpdated(result.meta.last_updated_at);
      } else {
        setLastUpdated(new Date().toISOString());
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch currency data');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  /**
   * Helper function to convert any currency to any currency
   * mathematically correctly when USD is the base.
   */
  const convert = (amount, fromCode, toCode) => {
    if (!rates || Object.keys(rates).length === 0) return 0;
    
    const fromRate = rates[fromCode.toUpperCase()]?.value || 1;
    const toRate = rates[toCode.toUpperCase()]?.value || 1;
    
    // Formula: (amount / fromRate) * toRate
    const baseAmount = amount / fromRate;
    return baseAmount * toRate;
  };

  return { rates, loading, error, lastUpdated, refetch: fetchRates, convert };
}
