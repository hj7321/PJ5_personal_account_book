import { createContext } from "react";
import initialExpense from "../data/dummyData.json";
import React, { useState } from "react";

export const ExpenseContext = createContext(null);

const ExpenseProvider = ({ children }) => {
  const [expense, setExpense] = useState(initialExpense);

  return (
    <ExpenseContext.Provider value={{ setExpense, expense }}>
      {children}
    </ExpenseContext.Provider>
  );
};

export default ExpenseProvider;
