import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Oops! Something is wrong</h1>
      <p>{JSON.stringify(error)}</p>
    </>
  );
};

export default ErrorPage;
