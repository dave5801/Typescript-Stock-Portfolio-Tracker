// File: App.tsx
import React, { useState } from "react";
import { PortfolioTable } from "./components/PortfolioTable";
import { AddStockForm } from "./components/AddStockForm";
import { StockHolding } from "./types";

const App = () => {
  const [holdings, setHoldings] = useState<StockHolding[]>([]);

  const addStock = (stock: StockHolding) => {
    // Mock price for now
    const mockPrice = Math.floor(Math.random() * 200) + 100; // Random price between 100 and 300
    const stockWithPrice = { ...stock, currentPrice: mockPrice };
    setHoldings((prev) => [...prev, stockWithPrice]);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">📊 Stock Portfolio Tracker</h1>
      <AddStockForm onAdd={addStock} />
      <PortfolioTable holdings={holdings} />
    </div>
  );
};

export default App;