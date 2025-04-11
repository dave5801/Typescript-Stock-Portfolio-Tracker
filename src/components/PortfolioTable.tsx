// File: components/PortfolioTable.tsx
import React from "react";
import { StockHolding } from "../types";

interface Props {
  holdings: StockHolding[];
}

export const PortfolioTable: React.FC<Props> = ({ holdings }) => {
  const calculateGainLoss = (stock: StockHolding) => {
    if (stock.currentPrice === undefined) return 0;
    return (stock.currentPrice - stock.buyPrice) * stock.quantity;
  };

  return (
    <table className="w-full table-auto border-collapse">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Ticker</th>
          <th className="border p-2">Quantity</th>
          <th className="border p-2">Buy Price</th>
          <th className="border p-2">Current Price</th>
          <th className="border p-2">Gain / Loss</th>
        </tr>
      </thead>
      <tbody>
        {holdings.map((stock, idx) => (
          <tr key={idx} className="text-center">
            <td className="border p-2">{stock.ticker}</td>
            <td className="border p-2">{stock.quantity}</td>
            <td className="border p-2">${stock.buyPrice.toFixed(2)}</td>
            <td className="border p-2">
              {stock.currentPrice ? `$${stock.currentPrice.toFixed(2)}` : "-"}
            </td>
            <td
              className={`border p-2 font-medium ${
                calculateGainLoss(stock) >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              ${calculateGainLoss(stock).toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
