import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./components/Add";
import Books from "./components/Books";
import Update from "./components/Update";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;