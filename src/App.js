
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/page/Home";
import Menu from "./Components/Menu";

function App() {
  return (
    <>
      <Navbar></Navbar>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/menu' element={<Menu />}></Route>
      </Routes>
    </>
  );
}

export default App;
