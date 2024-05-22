import MonthButton from "./MonthButton";
import { Section } from "../style/CalendarStyle";

const Calendar = () => {
  const monthNumArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  return (
    <Section>
      {monthNumArr.map((monthNum) => (
        <MonthButton key={monthNum} monthNum={monthNum} />
      ))}
    </Section>
  );
};

export default Calendar;
