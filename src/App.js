import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import background from "./assets/desk.jpg";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <img className="background-img" src={background} alt="background" />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
