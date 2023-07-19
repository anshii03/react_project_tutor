import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

const element = (
  <div id="parent">
    <div id="child1">
      <h1>Hello world using React Child </h1>
    </div>

    <div id="child2">
      <h1>Hello world using React Child2 </h1>
    </div>
  </div>
);

const learn = (
  <>
    <h1>Learning JSX</h1>
    <h1>Learning jsx....</h1>
  </>
);

// function AbcComponent() {
//   return <h1>Learning Components in React</h1>;
// }

const AbcComponent = () => <h1>Learning Components in React</h1>;

// Component composition
// function XYZComponent() {
//   return (
//     <>
//       <AbcComponent />
//       <h1>XYZ component......</h1>
//     </>
//   );
//}

const XYZComponent = () => {
  return (
    <>
      <AbcComponent />
      <h1>XYZ component......</h1>
    </>
  );
};

// JSX requires one parent element

// React Fragment

//root.render(<XYZComponent />);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
