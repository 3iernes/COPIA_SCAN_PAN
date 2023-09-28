import { createContext, useContext, useState } from "react";

const Context = createContext();
export const useAppContext = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [point, setPoint] = useState(null);
  const [modal, setModal] = useState(false);
  const [apiResponse, setApiResponse] = useState(null);
  return (
    <Context.Provider
      value={{
        data,
        setData,
        apiResponse,
        setApiResponse,
        point,
        setPoint,
        modal,
        setModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
