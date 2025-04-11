// File: components/AddStockForm.tsx
import React, { useState } from "react";
import { StockHolding } from "../types";

interface Props {
  onAdd: (stock: StockHolding) => void;
}

export const AddStockForm: React.FC<Props> = ({ onAdd }) => {
  const [ticker, setTicker] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ticker || quantity <= 0 || buyPrice <= 0) return;

    const newStock: StockHolding = {
      ticker: ticker.toUpperCase(),
      quantity,
      buyPrice,
    };

    onAdd(newStock);
    setTicker("");
    setQuantity(0);
    setBuyPrice(0);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 flex flex-col gap-2">
      <input
        type="text"
        placeholder="Ticker (e.g., AAPL)"
        value={ticker}
        onChange={(e) => setTicker(e.target.value)}
        className="border rounded p-2"
        required
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="border rounded p-2"
        required
      />
      <input
        type="number"
        placeholder="Buy Price"
        value={buyPrice}
        onChange={(e) => setBuyPrice(Number(e.target.value))}
        className="border rounded p-2"
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Add Stock
      </button>
    </form>
  );
};
