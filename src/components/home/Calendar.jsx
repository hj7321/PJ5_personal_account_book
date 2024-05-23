import { StSection, StButton } from "../style/CalendarStyle";
import Graph from "./Graph";
import Category from "./Category";
import { useState } from "react";

const Calendar = ({ setExpense, expense }) => {
  const [month, setMonth] = useState(
    JSON.parse(localStorage.getItem("month")) || 1
  );
  const monthNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const changeMonthNum = (monthNum) => {
    setMonth(monthNum);
    localStorage.setItem("month", JSON.stringify(monthNum));
  };

  return (
    <>
      <StSection>
        {monthNumArr.map((monthNum) => (
          <StButton
            key={monthNum}
            onClick={() => {
              changeMonthNum(monthNum);
            }}
          >
            {monthNum}월
          </StButton>
        ))}
      </StSection>
      <StSection>
        <Graph month={month} expense={expense} />
      </StSection>
      <StSection>
        <Category month={month} expense={expense} />
      </StSection>
    </>
  );
};

export default Calendar;
