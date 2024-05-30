import Form from "../home/Form";
import Calendar from "../home/Calendar";
import MonthProvider from "../../context/MonthContext";

const HomePage = () => {
  return (
    <>
      <Form />
      <MonthProvider>
        <Calendar />
      </MonthProvider>
    </>
  );
};

export default HomePage;
