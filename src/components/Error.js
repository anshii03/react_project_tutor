import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  // Object destructuring
  const { data, status, statusText } = err;
  return (
    <>
      <h1>Oops!!</h1>
      <h2>Something went wrong!!</h2>
      <h2>Please check your url</h2>
      {/* <h2>{err.status}-{err.error.message}</h2> */}
    </>
  );
};

export default Error;
