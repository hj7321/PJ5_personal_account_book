import { v4 as uuidv4 } from "uuid";
import { StButton, StForm } from "../style/FormStyle";
import HomeInput from "./HomeInput";

const Form = ({ setExpense }) => {
  const addExpense = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const date = data.get("date");
    const item = data.get("item");
    const amount = +data.get("amount");
    const description = data.get("description");

    const regex =
      /^(?:(?!0000)\d{4})-(?:(?:0[1-9]|1[0-2]))-(?:(?:0[1-9]|1\d|2[0-8])|(?:29|30)(?!(?:02))|31(?=(?:0[13578]|1[02])))$|^(?:(?:(?!0000)\d{2}(?:0[48]|[2468][048]|[13579][26])|(?:[02468][048]|[13579][26])00)-02-29)$/;

    if (!date.trim()) return alert("날짜를 입력해주세요.");
    else if (!regex.test(dateString))
      return alert("알맞은 날짜 형식을 입력해주세요.");
    else if (!item.trim()) return alert("지출 항목을 입력해주세요.");
    else if (!amount) return alert("지출 금액을 입력해주세요.");
    else if (amount <= 0) return alert("알맞은 지출 금액을 입력해주세요.");
    else if (!description.trim()) return alert("지출 내용을 입력해주세요.");

    const newExpense = {
      id: uuidv4(),
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
      <HomeInput engName={"date"} korName={"날짜"} placeholder={"YYYY-MM-DD"} />
      <HomeInput engName={"item"} korName={"항목"} placeholder={"지출 항목"} />
      <HomeInput
        engName={"amount"}
        korName={"금액"}
        placeholder={"지출 금액"}
      />
      <HomeInput
        engName={"description"}
        korName={"내용"}
        placeholder={"지출 내용"}
      />
      <StButton type="submit">저장</StButton>
    </StForm>
  );
};

export default Form;
