import Form from "../home/Form";
import Calendar from "../home/Calendar";
import MonthProvider from "../../context/MonthContext";
import Graph from "../home/Graph";
import Category from "../home/Category";

const HomePage = () => {
  return (
    <>
      <Form />
      <MonthProvider>
        <Calendar />
        <Graph />
        <Category />
      </MonthProvider>
    </>
  );
};

export default HomePage;
