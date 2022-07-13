import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Shoppingcart from "./Pages/Shoppingcart";
//usar grid
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/shoppingcart" element={<Shoppingcart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
