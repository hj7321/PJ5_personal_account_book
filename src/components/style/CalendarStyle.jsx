import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  background-color: aliceblue;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  gap: 25px;
  justify-content: center;
`;

export const Button = styled.button`
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
