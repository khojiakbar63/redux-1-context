import { createContext, useState } from "react";

export const StringContext = createContext("React JS");

export const StringProvider = ({ children }) => {
  const [str, setStr] = useState("React JS");

  const changeStr = () => {
    setStr("React Native");
  };

  return (
    <StringContext.Provider value={{ str, changeStr }}>
      {children}
    </StringContext.Provider>
  );
};
