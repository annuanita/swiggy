import React from 'react'
import { useRouteError } from 'react-router';
const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>OOps something went wrong!!</h1>
      <h3>{error.status} Status</h3>
    </div>
  )
}

export default Error;
