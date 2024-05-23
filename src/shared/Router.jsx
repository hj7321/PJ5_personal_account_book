import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import initialExpense from "../data/dummyData.json";
import HomePage from "../components/pages/HomePage";
import DetailPage from "../components/pages/DetailPage";

const Router = () => {
  const [expense, setExpense] = useState(initialExpense);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<HomePage setExpense={setExpense} expense={expense} />}
        />
        <Route
          path="detail"
          element={<DetailPage setExpense={setExpense} expense={expense} />}
        />
        <Route
          path="detail/:id"
          element={<DetailPage setExpense={setExpense} expense={expense} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
