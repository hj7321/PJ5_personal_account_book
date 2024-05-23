import styled from "styled-components";

export const StUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const StList = styled.li`
  display: flex;
  justify-content: space-between;
  width: 790px;
  border-radius: 8px;
  background-color: #9cffcd;
  padding: 10px;
  line-height: 1.5;
`;

export const StDiv = styled.div`
  display: flex;
  text-align: center;
  align-content: center;
  /* font-size: 18px; */
  font-weight: bold;
`;

export const StP = styled.p`
  width: 650px;
  white-space: nowrap; /* 텍스트 줄 바꿈 방지 */
  overflow: hidden; /* 넘치는 텍스트 숨기기 */
  text-overflow: ellipsis; /* 넘치는 텍스트에 ... 표시 */
`;
