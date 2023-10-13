import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='space-y-8'>
      <h1 className='text-center text-6xl font-extrabold mt-20 text-blue-600'>
        CRM CLIENTES
      </h1>
      <p className='text-center'>Hubo un Error</p>
      <p className='text-center'>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;
