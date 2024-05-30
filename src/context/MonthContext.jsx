import { createContext, useState } from "react";

export const MonthContext = createContext(null);

const MonthProvider = ({ children }) => {
  const [month, setMonth] = useState(
    JSON.parse(localStorage.getItem("month")) || 1
  );

  return (
    <MonthContext.Provider value={{ month, setMonth }}>
      {children}
    </MonthContext.Provider>
  );
};

export default MonthProvider;
