"use client";

import { useState, useEffect } from "react";
import { PixelBorder } from "./PixelBorder";

interface Stock {
  symbol: string;
  price: number;
  change: number;
}

export function StockTicker() {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const stockData: Stock[] = [
      { symbol: "MSFT", price: 150.25, change: 2.5 },
      { symbol: "AAPL", price: 120.75, change: -1.2 },
      { symbol: "IBM", price: 90.5, change: 0.75 },
      { symbol: "INTC", price: 45.3, change: -0.5 },
      { symbol: "CSCO", price: 30.15, change: 1.1 },
    ];
    setStocks(stockData);
  }, []);

  return (
    <PixelBorder>
      <div className="bg-blue-100 p-4">
        <h3 className="text-lg font-bold mb-2">Stock Ticker</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-200">
                <th className="p-2 border border-gray-400">Symbol</th>
                <th className="p-2 border border-gray-400">Price</th>
                <th className="p-2 border border-gray-400">Change</th>
              </tr>
            </thead>
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.symbol} className="text-center">
                  <td className="p-2 border border-gray-400">{stock.symbol}</td>
                  <td className="p-2 border border-gray-400">
                    ${stock.price.toFixed(2)}
                  </td>
                  <td
                    className={`p-2 border border-gray-400 ${
                      stock.change >= 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {stock.change >= 0 ? "+" : ""}
                    {stock.change.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PixelBorder>
  );
}
