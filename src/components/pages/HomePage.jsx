import { useState } from "react";
import initialExpense from "../../data/dummyData.json";
import Form from "../home/Form";
import Calendar from "../home/Calendar";

const HomePage = () => {
  const [expense, setExpense] = useState(initialExpense);

  return (
    <>
      <Form setExpense={setExpense} />
      <Calendar setExpense={setExpense} expense={expense} />
    </>
  );
};

export default HomePage;
