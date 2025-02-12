import React, { useState, useCallback } from 'react';
import { TrendingUp, TrendingDown, Minus, Clock, X, RotateCw } from 'lucide-react';
import { useExchangeRates } from '../../hooks/useExchangeRates';

const ExchangeRates = () => {
  const { rates, loading, error, lastUpdate, refresh } = useExchangeRates();
  const [showDetailedRates, setShowDetailedRates] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const allowedCurrencies = ['USD', 'EUR', 'RUB', 'AED', 'SAR'];

  // Фильтруем только нужные валюты
  const filteredRates = rates.filter(rate => allowedCurrencies.includes(rate.Ccy));

  // Функция расчета курсов покупки и продажи
  const calculateRates = useCallback((rate: string) => {
    const centralRate = parseFloat(rate);
    return {
      buying: (centralRate * 0.995).toFixed(2),
      selling: (centralRate * 1.005).toFixed(2)
    };
  }, []);

  // Обновление курсов
  const handleRefresh = useCallback(async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    await refresh();
    setTimeout(() => setIsRefreshing(false), 1000);
  }, [refresh, isRefreshing]);

  if (loading && !filteredRates.length) {
    return (
      <div className="flex items-center space-x-4">
        <div className="h-4 w-24 bg-white/20 animate-pulse rounded"></div>
        <div className="h-4 w-24 bg-white/20 animate-pulse rounded"></div>
        <div className="h-4 w-24 bg-white/20 animate-pulse rounded"></div>
      </div>
    );
  }

  if (error || !filteredRates.length) {
    return (
      <div className="text-red-400 flex items-center gap-2">
        <span>Failed to load exchange rates.</span>
        <button
          onClick={handleRefresh}
          className="text-white hover:text-[#FF5733] transition-colors"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-6">
          {filteredRates.map((rate) => {
            const diff = parseFloat(rate.Diff);
            const Icon = diff > 0 ? TrendingUp : diff < 0 ? TrendingDown : Minus;
            const colorClass = diff > 0 ? 'text-green-400' : diff < 0 ? 'text-red-400' : 'text-gray-400';

            return (
              <button
                key={rate.Ccy}
                onClick={() => setShowDetailedRates(true)}
                className="flex flex-wrap items-center text-sm hover:text-primary-300 transition-colors group"
                title="Click to see detailed rates"
              >
                <span className="font-medium mr-2">{rate.Ccy}</span>
                <span className="mr-1 group-hover:text-primary-300">{rate.Rate}</span>
                <Icon className={`w-3 h-3 ${colorClass}`} />
              </button>
            );
          })}
        </div>
        <button
          onClick={handleRefresh}
          disabled={isRefreshing}
          className={`p-2 rounded-full hover:bg-white/10 transition-colors ${
            isRefreshing ? 'animate-spin' : ''
          }`}
          title="Refresh rates"
        >
          <RotateCw className="w-4 h-4" />
        </button>
      </div>

      {/* Подробная информация о курсах */}
      {showDetailedRates && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-4 animate-fade-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-gray-900">Current Exchange Rates</h2>
                <button
                  onClick={() => setShowDetailedRates(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mb-4 flex items-center justify-between text-sm text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Last updated: {lastUpdate}
                </div>
                <button
                  onClick={handleRefresh}
                  disabled={isRefreshing}
                  className={`flex items-center gap-2 text-[#FF5733] ${
                    isRefreshing ? 'opacity-50' : 'hover:text-[#FF4520]'
                  }`}
                >
                  <RotateCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  Refresh
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Currency</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Buying Rate</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Central Rate</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Selling Rate</th>
                      <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">24h Change</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredRates.map((rate) => {
                      const { buying, selling } = calculateRates(rate.Rate);
                      const diff = parseFloat(rate.Diff);
                      const Icon = diff > 0 ? TrendingUp : diff < 0 ? TrendingDown : Minus;
                      const colorClass = diff > 0 ? 'text-green-600' : diff < 0 ? 'text-red-600' : 'text-gray-600';

                      return (
                        <tr key={rate.Ccy} className="border-b border-gray-100">
                          <td className="px-4 py-4">
                            <div className="flex items-center">
                              <span className="font-medium text-gray-900">{rate.Ccy}</span>
                              <span className="ml-2 text-sm text-gray-500">{rate.CcyNm_EN}</span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-right font-medium text-gray-900">{buying}</td>
                          <td className="px-4 py-4 text-right font-medium text-gray-900">{rate.Rate}</td>
                          <td className="px-4 py-4 text-right font-medium text-gray-900">{selling}</td>
                          <td className="px-4 py-4 text-right">
                            <div className={`flex items-center justify-end ${colorClass}`}>
                              <span className="font-medium">{diff > 0 ? '+' : ''}{rate.Diff}</span>
                              <Icon className="w-4 h-4 ml-1" />
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ExchangeRates;
