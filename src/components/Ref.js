import { useState, useRef } from "react";

const Ref = () => {
  const [y, setY] = useState(0); // state Variable
  let x = 10;

  const ref = useRef(0);

  console.log("ref", ref);

  console.log("rendering");

  return (
    <>
      <div className="w-96 h-96 border border-black">
        <button
          className="bg-green-500 p-2 m-4"
          onClick={() => {
            x = x + 1;
            console.log("x=" + x);
          }}
        >
          Increase X
        </button>
        <span className="font-bold text-lg">Let={x}</span>

        <button
          className="bg-green-500 p-2 m-4"
          onClick={() => {
            setY(y + 1);
            console.log("y=" + y);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-lg">State={y}</span>

        <button
          className="bg-green-500 p-2 m-4"
          onClick={() => {
            ref.current = ref.current + 1;
            console.log("ref=" + ref.current);
          }}
        >
          Increase ref
        </button>
        <span className="font-bold text-lg">ref={ref.current}</span>
      </div>
    </>
  );
};

export default Ref;
