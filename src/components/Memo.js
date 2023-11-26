import { findPrime } from "../common/helper";
import { useMemo, useState } from "react";

export const Memo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setDarkTheme] = useState(false);

  const prime = useMemo(() => findPrime(text), [text]); //1234567

  console.log("rendering", isDarkTheme);

  return (
    <>
      <div
        className={
          "w-96 h-96 border border-black " +
          (isDarkTheme && "bg-gray-900 text-white")
        }
      >
        <button
          className="bg-green-100 m-10"
          onClick={(e) => setDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
        <input
          className="border border-black w-72 px-2"
          type="number"
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <h1 className="font-bold, text-xl">nth Prime: {prime}</h1>
        </div>
      </div>
    </>
  );
};
