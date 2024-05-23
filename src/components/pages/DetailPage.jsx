import DetailContent from "../detail/DetailContent";
import { StSection } from "../style/DetailContentStyle";

const DetailPage = ({ expense, setExpense }) => {
  return (
    <StSection>
      <DetailContent expense={expense} setExpense={setExpense} />
    </StSection>
  );
};

export default DetailPage;
