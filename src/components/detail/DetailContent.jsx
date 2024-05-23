import { useNavigate, useParams } from "react-router-dom";
import { StDiv } from "../style/FormStyle";
import { useState } from "react";

const DetailContent = ({ expense, setExpense }) => {
  const navigate = useNavigate();
  const param = useParams();

  const clickedExpense = expense.find((obj) => obj.id === param.id);

  const [date, setDate] = useState(clickedExpense.date);
  const [item, setItem] = useState(clickedExpense.item);
  const [amount, setAmount] = useState(clickedExpense.amount);
  const [description, setDescription] = useState(clickedExpense.description);

  const updateExpense = () => {
    console.log("수정 기능");
    setExpense((prev) =>
      prev.map((obj) =>
        obj.id === param.id ? { ...obj, date, item, amount, description } : obj
      )
    );
    console.log;
    navigate("/");
  };

  const deleteExpense = () => {
    console.log("삭제 기능");
    alert("정말로 이 항목을 삭제하시겠습니까?");
    setExpense((prev) => prev.filter((obj) => obj.id !== param.id));
    navigate("/");
  };

  return (
    <>
      <StDiv>
        <label htmlFor="date">날짜</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="item">항목</label>
        <input
          type="text"
          id="item"
          value={item}
          onChange={(e) => setItem(e.target.value)}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="amount">금액</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </StDiv>
      <StDiv>
        <label htmlFor="description">내용</label>
        <input
          type="text"
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </StDiv>
      <div>
        <button onClick={updateExpense}>수정</button>
        <button onClick={deleteExpense}>삭제</button>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          뒤로가기
        </button>
      </div>
    </>
  );
};

export default DetailContent;
