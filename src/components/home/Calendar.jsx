import initialExpense from "../../data/dummyData.json";
import { Section } from "../style/CalendarStyle";
import { Button } from "../style/CalendarStyle";
import Graph from "./Graph";
import Category from "./Category";

const Calendar = ({ setExpense, expense }) => {
  const monthNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const showExpense = (month) => {
    setExpense(initialExpense);
    setExpense((expense) =>
      expense.filter((ele) => ele.date.split("-")[1] == month)
    );
  };

  return (
    <>
      <Section>
        {monthNumArr.map((monthNum) => (
          <Button
            key={monthNum}
            onClick={() => {
              showExpense(monthNum);
            }}
          >
            {monthNum}월
          </Button>
        ))}
      </Section>
      <Section>
        <Graph expense={expense} />
      </Section>
      <Section>
        <Category expense={expense} />
      </Section>
    </>
  );
};

export default Calendar;
