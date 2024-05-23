import { StDiv } from "../style/FormStyle";

const DetailInput = ({ engName, korName, state, setState }) => {
  return (
    <StDiv>
      <label htmlFor={engName}>{korName}</label>
      <input
        type={engName === "amount" ? "number" : "text"}
        id={engName}
        value={state}
        onChange={(e) => setState(e.target.value)}
      />
    </StDiv>
  );
};

export default DetailInput;
