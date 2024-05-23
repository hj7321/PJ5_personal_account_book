import { StDiv } from "../style/FormStyle";

const DetailInput = ({ engName, korName, value, setState }) => {
  return (
    <StDiv>
      <label htmlFor={engName}>{korName}</label>
      <input
        type={engName}
        id={engName}
        value={value}
        onChange={(e) => setState(e.target.value)}
      />
    </StDiv>
  );
};

export default DetailInput;
