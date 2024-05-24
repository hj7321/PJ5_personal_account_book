import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import initialExpense from "../data/dummyData.json";
import HomePage from "../components/pages/HomePage";
import DetailPage from "../components/pages/DetailPage";
import { ExpenseContext } from "../context/SharedContext";

const Router = () => {
  const [expense, setExpense] = useState(initialExpense);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ExpenseContext.Provider value={{ setExpense, expense }}>
              <HomePage />
            </ExpenseContext.Provider>
          }
        />
        <Route
          path="detail"
          element={
            <ExpenseContext.Provider value={{ setExpense, expense }}>
              <DetailPage />
            </ExpenseContext.Provider>
          }
        />
        <Route
          path="detail/:id"
          element={
            <ExpenseContext.Provider value={{ setExpense, expense }}>
              <DetailPage />
            </ExpenseContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
