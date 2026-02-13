"use client";
import { useState } from "react";

export default function Home() {
  const [bill, setBill] = useState("");
  const [tipPercent, setTipPercent] = useState(10);
  const [tipAmount, setTipAmount] = useState("0.00");
  const [totalAmount, setTotalAmount] = useState("0.00");

  const calculate = () => {
    const billValue = Number(bill);
    if (!billValue || billValue <= 0) return;

    const tipValue = (billValue * tipPercent) / 100;
    const total = billValue + tipValue;

    setTipAmount(tipValue.toFixed(2));
    setTotalAmount(total.toFixed(2));
  };

  const reset = () => {
    setBill("");
    setTipPercent(10);
    setTipAmount("0.00");
    setTotalAmount("0.00");
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6
      bg-gradient-to-br from-pink-100 via-rose-50 to-sky-100">

      <div className="w-full max-w-4xl">

        <div className="bg-white rounded-2xl text-center py-4 mb-6 
          font-semibold text-lg shadow-md text-pink-500">Tip Calculator</div>

        <div className="bg-white rounded-3xl shadow-xl flex overflow-hidden">

          <div className="w-1/2 p-8">

            <label className="block font-semibold mb-2 text-pink-500">Bill Amount</label>

            <input
              type="number"
              value={bill}
              onChange={(e) => setBill(e.target.value)}
              placeholder="Enter amount"
              className="w-full bg-pink-50 border border-pink-200 rounded-xl px-4 py-3 mb-6
              text-pink-700 font-medium placeholder:text-pink-300
              focus:outline-none focus:ring-2 focus:ring-pink-300"/>

            <label className="block font-semibold mb-3 text-sky-500">Tip Percentage</label>

            <div className="grid grid-cols-3 gap-3 mb-8">
              {[5, 10, 15, 20, 25, 30].map((percent) => (
                <button
                  key={percent}
                  onClick={() => setTipPercent(percent)}
                  className={`py-2 rounded-xl font-medium transition
                  ${
                    tipPercent === percent
                      ? "bg-pink-400 text-white shadow-md"
                      : "bg-sky-100 text-sky-600 hover:bg-sky-200"}`}
                >{percent}%</button>))}
            </div>

            <button
              onClick={calculate}
              className="w-full bg-sky-400 hover:bg-sky-500 text-white 
              py-3 rounded-2xl font-semibold transition shadow-md"
            >Calculate</button>
          </div>

          <div className="w-1/2 p-8 bg-gradient-to-b from-sky-200 to-pink-200 
            flex flex-col justify-between">

            <div>
              <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm text-center">
                <p className="text-xs uppercase tracking-wider text-pink-400 mb-2">Tip</p>
                <h2 className="text-2xl font-bold text-pink-600">${tipAmount}</h2>
              </div>

              <div className="bg-white rounded-2xl p-5 shadow-sm text-center">
                <p className="text-xs uppercase tracking-wider text-sky-400 mb-2">Total</p>
                <h2 className="text-2xl font-bold text-sky-600">${totalAmount}</h2>
              </div>
            </div>

            <button
              onClick={reset}
              className="mt-6 bg-white text-pink-500 font-semibold 
              py-3 rounded-2xl hover:bg-pink-50 transition shadow-sm">Reset</button>
          </div>

        </div>
      </div>
    </div>
  );
}
