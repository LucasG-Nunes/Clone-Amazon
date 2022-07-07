import { createContext, useState } from "react";

export const ContextInput = createContext();

export const ContextInputProvider = ({ children }) => {
  const [input, setInput] = useState();

  return (
    <ContextInput.Provider value={{ input, setInput }}>
      {children}
    </ContextInput.Provider>
  );
};
