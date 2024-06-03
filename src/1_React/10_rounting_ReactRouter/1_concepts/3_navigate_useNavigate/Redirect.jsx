import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function Redirect({ to, isAuto }) {
  // 1st way
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuto) {
      setTimeout(() => {
        navigate(to);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [to, isAuto]);

  return (
    <>
      <p>Redirect</p>
      <Navigate to={to} />
    </>
  );
}
export default Redirect;
