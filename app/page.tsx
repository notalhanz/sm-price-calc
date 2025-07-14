"use client";
import { useState, ChangeEvent } from "react";

export default function Page() {
  const [inputValue, setInputValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replaceAll(",", ".");
    setInputValue(value);

    const num = parseFloat(value);
    if (!isNaN(num)) {
      setResult(num * 2 - 0.01);
    } else {
      setResult(null);
    }
  };

  const clearField = () => {
    setInputValue("");
    setResult(null)
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mb-3 text-center leading-4">
        <span className="font-semibold">supermarket together</span>
        <br />
        <span className="text-sm">price calculator</span>
      </div>
      <div className="flex gap-2">
        <input
          id="numberInput"
          type="text"
          inputMode="numeric"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="0.00"
          className="ml-10 text-center border-2 border-[#383838] rounded-xl w-60 h-10 
          focus:outline-0
          focus:border-white 
          focus:border-1 
          hover:border-white
          duration-300"
        ></input>
        <button
          onClick={clearField}
          className="w-10 h-10 rounded-xl bg-[#191919] hover:bg-[#242424] ease-in-out duration-300"
        >
          🗑️
        </button>
      </div>
      <div className="p-3 text-sm">
        {result !== null ? (
          <p>
            Calculated Value:{" "}
            <span className="font-semibold">{result.toFixed(2)}</span>
          </p>
        ) : (
          <p>no input ;)</p>
        )}
      </div>
    </div>
  );
}
