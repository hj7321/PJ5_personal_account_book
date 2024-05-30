import { StSection, StButton } from "../style/CalendarStyle";
import Graph from "./Graph";
import Category from "./Category";
import { useContext, useEffect } from "react";
import MonthProvider, { MonthContext } from "../../context/MonthContext";

const Calendar = () => {
  const { month, setMonth } = useContext(MonthContext);

  const monthNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const changeMonthNum = (monthNum) => {
    setMonth(monthNum);
  };

  useEffect(() => {
    localStorage.setItem("month", JSON.stringify(month));
  }, [month]);

  return (
    <>
      <StSection>
        {monthNumArr.map((monthNum) => (
          <StButton
            key={monthNum}
            $active={month === monthNum}
            onClick={() => {
              changeMonthNum(monthNum);
            }}
          >
            {monthNum}월
          </StButton>
        ))}
      </StSection>
      <Graph />
      <Category />
    </>
  );
};

export default Calendar;
