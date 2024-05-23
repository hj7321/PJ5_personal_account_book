import Form from "../home/Form";
import Calendar from "../home/Calendar";

const HomePage = ({ setExpense, expense }) => {
  return (
    <>
      <Form setExpense={setExpense} />
      <Calendar setExpense={setExpense} expense={expense} />
    </>
  );
};

export default HomePage;
