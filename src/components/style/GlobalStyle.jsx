import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    max-width: 900px;
    min-width: 600px;
    margin: 0 auto;
    background-color: pink;
  }
  button {
    cursor: pointer;
  }
  h3 {
    font-size: 20px;
    font-weight: bold;
  }
  input {
    height: 25px;
  }
  /* form, div {
    background-color: aliceblue;
    border-radius: 10px;
  }
  form {
    padding: 20px;
  } */
`;

export default GlobalStyle;
