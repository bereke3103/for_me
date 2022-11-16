import { useContext } from 'react';
import { useState } from 'react';
import { createContext } from 'react';

const AlertContext = createContext();
// const AlertContextToggle = createContext();

export const useAlert = () => {
  return useContext(AlertContext);
};

// export const useAlertToggle = () => {
//   return useContext(AlertContextToggle);
// };

export const AlertProvdier = ({ children }) => {
  const [alert, setAlert] = useState(false);
  const toggleAlert = () => {
    setAlert(!alert);
  };
  return (
    <AlertContext.Provider
      value={{
        visible: alert,
        toggleAlert,
      }}
    >
      {/* <AlertContextToggle.Provider value={toggleAlert}> */}
      {children}
      {/* </AlertContextToggle.Provider> */}
    </AlertContext.Provider>
  );
};
