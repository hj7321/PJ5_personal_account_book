import styled from "styled-components";

export const StSection = styled.section`
  flex-wrap: wrap;
  gap: 25px;
`;

export const StButton = styled.button`
  border-radius: 10px;
  padding: 20px;
  width: 100px;
  background-color: lightcoral;
  font-size: 20px;
  border: 2px solid lightcoral;
  &:hover {
    background-color: red;
    font-weight: bold;
  }
`;
