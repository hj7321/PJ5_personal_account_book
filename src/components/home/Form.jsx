import { StButton, StForm, StDiv } from "../style/FormStyle";

const Form = ({ setExpense }) => {
  const addExpense = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const date = data.get("date");
    const item = data.get("item");
    const amount = +data.get("amount");
    const description = data.get("description");

    if (!date) return alert("날짜를 입력해주세요.");
    else if (!item.trim()) return alert("지출 항목을 입력해주세요.");
    else if (!amount) return alert("지출 금액을 입력해주세요.");
    else if (!description.trim()) return alert("지출 내용을 입력해주세요.");

    // 데이터 추가하기
    const newExpense = {
      id: crypto.randomUUID(),
      date,
      item,
      amount,
      description,
    };

    setExpense((expense) => [...expense, newExpense]);

    e.target.reset();
  };

  return (
    <StForm onSubmit={addExpense}>
      <StDiv>
        <label htmlFor="date">날짜</label>
        <input type="date" id="date" name="date" />
      </StDiv>
      <StDiv>
        <label htmlFor="item">항목</label>
        <input type="text" id="item" name="item" placeholder="지출 항목" />
      </StDiv>
      <StDiv>
        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          name="amount"
          placeholder="지출 금액"
        />
      </StDiv>
      <StDiv>
        <label htmlFor="description">내용</label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="지출 내용"
        />
      </StDiv>
      <StButton type="submit">저장</StButton>
    </StForm>
  );
};

export default Form;
