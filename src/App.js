import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";


function App() {

  return (
    <Routes>
      <Route path="/portfolio" element={<Main />} />
    </Routes>
  );
}

export default App;
