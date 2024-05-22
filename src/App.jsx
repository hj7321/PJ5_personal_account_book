import GlobalStyle from "./components/style/GlobalStyle";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      {/* <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="detail/:id" element={<DetailPage />} />
        </Routes>
      </BrowserRouter> */}
      <GlobalStyle />
      <HomePage />
    </>
  );
}

export default App;
