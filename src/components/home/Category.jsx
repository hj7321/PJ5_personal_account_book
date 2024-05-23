import { StSection } from "../style/CalendarStyle";
import { StList, StUl, StDiv, StP } from "../style/CategoryStyle";

const Category = ({ month, expense }) => {
  const filteredExpense = expense.filter(
    (obj) => obj.date.split("-")[1] == month
  );

  return (
    <StSection>
      {filteredExpense.length ? "" : "지출이 없습니다."}
      <StUl>
        {filteredExpense.map((obj) => (
          <StList key={obj.id}>
            <div>
              <p>{obj.date}</p>
              <StP>
                [{obj.item}] {obj.description}
              </StP>
            </div>
            <StDiv>{obj.amount.toLocaleString()}원</StDiv>
          </StList>
        ))}
      </StUl>
    </StSection>
  );
};

export default Category;
