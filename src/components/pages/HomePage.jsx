import Form from "../home/Form";
import Calendar from "../home/Calendar";

const HomePage = ({ setExpense, expense }) => {
  return (
    <>
      <Form setExpense={setExpense} />
      <Calendar expense={expense} />
    </>
  );
};

export default HomePage;
