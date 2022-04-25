import { Route, Routes } from "react-router-dom";
import { Board } from "./components/Board/Board";
import { BoardPage } from "./pages/BoardPage";
import { MainPage } from "./pages/MainPage";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/boards" element={<BoardPage />}>
          <Route path=":id" element={<BoardPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
