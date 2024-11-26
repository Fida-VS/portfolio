import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<div>Страница с ошибкой</div>} />
    </Routes>
  );
}

export default App;
