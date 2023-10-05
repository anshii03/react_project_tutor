import { useState, useEffect } from "react";

const Profile = (props) => {
  // count

  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);

  console.log("props", props);

  console.log("rendering");

  // Object destructuring
  const { name, color } = props;

  function updateCount() {
    setCount(1);
    setCount1(2);
  }

  useEffect(() => {
    console.log("use effect called");

    const timer = setInterval(() => {
      console.log("interval created functional comp");
    }, 1000);

    return () => {
      console.log("functional component is unmounted");
      clearInterval(timer);
    };
  }, [count, count1]);

  return (
    <>
      <h1>Profile Component</h1>
      <h2>name: {name}</h2>
      <h2>color: {color}</h2>
      <h2>Count: {count}</h2>
      <h2>Count1: {count1}</h2>
      <button onClick={updateCount}>Update Count</button>
    </>
  );
};

export default Profile;
