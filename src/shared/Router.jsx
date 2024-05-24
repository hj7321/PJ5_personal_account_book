import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import initialExpense from "../data/dummyData.json";
import HomePage from "../components/pages/HomePage";
import DetailPage from "../components/pages/DetailPage";
import { PageContext } from "../context/PageContext";

const Router = () => {
  const [expense, setExpense] = useState(initialExpense);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PageContext.Provider value={{ setExpense, expense }}>
              <HomePage />
            </PageContext.Provider>
          }
        />
        <Route
          path="detail"
          element={
            <PageContext.Provider value={{ setExpense, expense }}>
              <DetailPage />
            </PageContext.Provider>
          }
        />
        <Route
          path="detail/:id"
          element={
            <PageContext.Provider value={{ setExpense, expense }}>
              <DetailPage />
            </PageContext.Provider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
