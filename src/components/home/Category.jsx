import { Link } from "react-router-dom";
import { StSection } from "../style/CalendarStyle";
import { StDiv, StP } from "../style/CategoryStyle";

const Category = ({ month, expense }) => {
  const filteredExpense = expense.filter(
    (obj) => obj.date.split("-")[1] == month
  );

  return (
    <StSection>
      <ul>
        {filteredExpense.length ? "" : "지출이 없습니다."}
        {filteredExpense.map((obj) => (
          <Link key={obj.id} to={`/detail/${obj.id}`}>
            <li>
              <div>
                <p>{obj.date}</p>
                <StP>
                  [{obj.item}] {obj.description}
                </StP>
              </div>
              <StDiv>{obj.amount.toLocaleString()}원</StDiv>
            </li>
          </Link>
        ))}
      </ul>
    </StSection>
  );
};

export default Category;
