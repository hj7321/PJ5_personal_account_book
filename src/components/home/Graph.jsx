import { useContext } from "react";
import { MonthContext, ExpenseContext } from "../../context/SharedContext";
import { StSection } from "../style/CalendarStyle";
import { StH3 } from "../style/GraphStyle";

const Graph = () => {
  const { expense } = useContext(ExpenseContext);
  const { month } = useContext(MonthContext);

  const filteredExpense = expense.filter(
    (obj) => obj.date.split("-")[1] == month
  );

  return (
    <StSection>
      <StH3>
        {month}월 총 지출: 💸
        {filteredExpense
          ? filteredExpense
              .reduce((amount, obj) => {
                return amount + obj.amount;
              }, 0)
              .toLocaleString()
          : 0}
        원
      </StH3>
      {/* 그래프 나타내기 */}
    </StSection>
  );
};

export default Graph;
