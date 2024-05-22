import Calendar from "./components/Calendar";
import Category from "./components/Category";
import Form from "./components/Form";
import Graph from "./components/Graph";
import GlobalStyle from "./components/style/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Form />
      <Calendar />
      <Graph />
      <Category />
    </>
  );
}

export default App;
