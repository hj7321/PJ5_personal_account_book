import { useContext } from "react";
import { MonthContext, ExpenseContext } from "../../context/SharedContext";
import { StH3, StSection } from "../style/GraphStyle";
import { StDiv } from "./../style/GraphStyle";

const Graph = () => {
  const { expense } = useContext(ExpenseContext);
  const { month } = useContext(MonthContext);

  const filteredExpense = expense.filter(
    (obj) => obj.date.split("-")[1] == month
  );

  const itemObj = filteredExpense.reduce((accObj, curObj) => {
    if (accObj[curObj.item]) accObj[curObj.item] += curObj.amount;
    else accObj[curObj.item] = curObj.amount;
    return accObj;
  }, {});

  const changeArrToItemObj = Object.entries(itemObj);

  const totalAmount = filteredExpense.reduce((amount, obj) => {
    return amount + obj.amount;
  }, 0);

  return (
    <StSection>
      <StH3>
        {month}월 총 지출: 💸
        {filteredExpense ? totalAmount.toLocaleString() : 0}원
      </StH3>
      {/* 그래프 나타내기 */}
      <StDiv $margin={filteredExpense.length}>
        {changeArrToItemObj.map((cur) => (
          <p key={cur[0]}>
            {cur[0]}: {cur[1].toLocaleString()}원 (
            {Math.round((cur[1] / totalAmount) * 100 * 100) / 100}%)
          </p>
        ))}
      </StDiv>
    </StSection>
  );
};

export default Graph;
