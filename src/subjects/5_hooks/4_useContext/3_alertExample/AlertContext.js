import React, { useContext, useState } from "react";

const AlertContext = React.createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

// eslint-disable-next-line react/prop-types
export const AlertProvider = ({ children }) => {
  const [alertState, setAlertState] = useState(false);

  const toggle = () => setAlertState(prev => !prev);

  return (
    <AlertContext.Provider
      value={{
        visible: alertState,
        toggle: toggle,
      }}
    >
      {children}
    </AlertContext.Provider>
  );
};
