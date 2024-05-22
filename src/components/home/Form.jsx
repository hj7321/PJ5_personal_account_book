import { Button, FormBox, InputContainer } from "../style/FormStyle";

const Form = () => {
  const addExpense = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const date = data.get("date");
    const list = data.get("list");
    const amount = data.get("amount");
    const content = data.get("content");

    if (!date) return alert("날짜를 입력해주세요.");
    else if (!list.trim()) return alert("지출 항목을 입력해주세요.");
    else if (!amount.trim()) return alert("지출 금액을 입력해주세요.");
    else if (!content.trim()) return alert("지출 내용을 입력해주세요.");

    // 데이터 추가하기
  };

  return (
    <FormBox onSubmit={addExpense}>
      <InputContainer>
        <label htmlFor="date">날짜</label>
        <input type="date" id="date" name="date" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="list">항목</label>
        <input type="text" id="list" name="list" placeholder="지출 항목" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="amount">금액</label>
        <input type="text" id="amount" name="amount" placeholder="지출 금액" />
      </InputContainer>
      <InputContainer>
        <label htmlFor="content">내용</label>
        <input
          type="text"
          id="content"
          name="content"
          placeholder="지출 내용"
        />
      </InputContainer>
      <Button type="submit">저장</Button>
    </FormBox>
  );
};

export default Form;
