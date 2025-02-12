import { useState, useEffect, useCallback } from 'react';

interface ExchangeRate {
  Ccy: string;      // Currency code (USD, EUR, etc.)
  CcyNm_EN: string; // Currency name in English
  Rate: string;     // Exchange rate
  Diff: string;     // Rate change
  Date: string;     // Update date
}

interface CachedData {
  rates: ExchangeRate[];
  timestamp: number;
}

const CACHE_KEY = 'exchange_rates_cache';
const CACHE_DURATION = 30 * 60 * 1000; // 30 minutes
const API_URL = 'https://cbu.uz/oz/arkhiv-kursov-valyut/json/';

// List of currencies to display
const DISPLAY_CURRENCIES = ['USD', 'EUR', 'RUB', 'CNY', 'AED'];

export const useExchangeRates = () => {
  const [rates, setRates] = useState<ExchangeRate[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>('');

  // Load cached data
  const loadCache = useCallback((): CachedData | null => {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;

    try {
      const data = JSON.parse(cached) as CachedData;
      const now = Date.now();
      if (now - data.timestamp <= CACHE_DURATION) {
        return data;
      }
    } catch (e) {
      console.error('Failed to parse cache:', e);
    }
    return null;
  }, []);

  // Save data to cache
  const saveCache = useCallback((data: CachedData) => {
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify(data));
    } catch (e) {
      console.error('Failed to save cache:', e);
    }
  }, []);

  // Format date to Tashkent time
  const formatTashkentTime = useCallback((date: Date): string => {
    return date.toLocaleString('en-US', {
      timeZone: 'Asia/Tashkent',
      dateStyle: 'medium',
      timeStyle: 'medium',
    });
  }, []);

  // Fetch exchange rates
  const fetchRates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Check cache first
      const cached = loadCache();
      if (cached) {
        setRates(cached.rates);
        setLastUpdate(formatTashkentTime(new Date(cached.timestamp)));
        setLoading(false);
        return;
      }

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data: ExchangeRate[] = await response.json();
      
      // Filter for specified currencies and sort them in the desired order
      const filteredRates = DISPLAY_CURRENCIES
        .map(currency => data.find(rate => rate.Ccy === currency))
        .filter((rate): rate is ExchangeRate => rate !== undefined);

      // Save to cache
      const cacheData: CachedData = {
        rates: filteredRates,
        timestamp: Date.now(),
      };
      saveCache(cacheData);

      // Update state
      setRates(filteredRates);
      setLastUpdate(formatTashkentTime(new Date()));
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch rates');
      console.error('Failed to fetch exchange rates:', err);
    } finally {
      setLoading(false);
    }
  }, [loadCache, saveCache, formatTashkentTime]);

  // Initial fetch and setup interval
  useEffect(() => {
    fetchRates();
    const interval = setInterval(fetchRates, CACHE_DURATION);
    return () => clearInterval(interval);
  }, [fetchRates]);

  return {
    rates,
    loading,
    error,
    lastUpdate,
    refresh: fetchRates,
  };
};