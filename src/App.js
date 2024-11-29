import { Routes, Route } from "react-router-dom";
import { Main } from "./pages/main/main";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    const ratio = window.devicePixelRatio;
  
    if (ratio > 1) {
      console.log("Масштаб увеличен");
  
      document.body.style.transform = 'scale(1)';
  }
  }, [])

  return (
    <Routes>
      <Route path="/portfolio" element={<Main />} />
    </Routes>
  );
}

export default App;
