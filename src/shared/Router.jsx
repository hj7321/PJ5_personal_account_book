import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import DetailPage from "../components/pages/DetailPage";
import ExpenseProvider from "../context/ExpenseContext";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <ExpenseProvider>
              <HomePage />
            </ExpenseProvider>
          }
        />
        <Route
          path="detail/:id"
          element={
            <ExpenseProvider>
              <DetailPage />
            </ExpenseProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
