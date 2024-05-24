import { StSection, StButton } from "../style/CalendarStyle";
import Graph from "./Graph";
import Category from "./Category";
import { useState } from "react";
import { MonthContext } from "../../context/SharedContext";

const Calendar = () => {
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
            $active={month === monthNum}
            onClick={() => {
              changeMonthNum(monthNum);
            }}
          >
            {monthNum}월
          </StButton>
        ))}
      </StSection>
      <MonthContext.Provider value={{ month }}>
        <Graph />
        <Category />
      </MonthContext.Provider>
    </>
  );
};

export default Calendar;
