import { StSection } from "../style/CalendarStyle";

const Graph = ({ month, expense }) => {
  return (
    <StSection>
      <h3>
        {month}월 총 지출:{" "}
        {expense
          ? expense
              .reduce((amount, obj) => {
                return amount + obj.amount;
              }, 0)
              .toLocaleString()
          : 0}
        원
      </h3>
    </StSection>
  );
};

export default Graph;
