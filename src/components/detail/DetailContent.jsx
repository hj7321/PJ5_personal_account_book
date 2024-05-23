import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import DetailInput from "./DetailInput";

const DetailContent = ({ expense, setExpense }) => {
  const navigate = useNavigate();
  const param = useParams();

  const clickedExpense = expense.find((obj) => obj.id === param.id);

  const [date, setDate] = useState(clickedExpense.date);
  const [item, setItem] = useState(clickedExpense.item);
  const [amount, setAmount] = useState(clickedExpense.amount);
  const [description, setDescription] = useState(clickedExpense.description);

  const updateExpense = () => {
    setExpense((prev) =>
      prev.map((obj) =>
        obj.id === param.id ? { ...obj, date, item, amount, description } : obj
      )
    );
    console.log;
    navigate("/");
  };

  const deleteExpense = () => {
    alert("정말로 이 항목을 삭제하시겠습니까?");
    setExpense((prev) => prev.filter((obj) => obj.id !== param.id));
    navigate("/");
  };

  return (
    <>
      <DetailInput
        engName={"date"}
        korName={"날짜"}
        value={date}
        setState={setDate}
      />
      <DetailInput
        engName={"item"}
        korName={"항목"}
        value={item}
        setState={setItem}
      />
      <DetailInput
        engName={"amount"}
        korName={"금액"}
        value={amount}
        setState={setAmount}
      />
      <DetailInput
        engName={"description"}
        korName={"내용"}
        value={description}
        setState={setDescription}
      />
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
