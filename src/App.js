//Importing styles
import "./App.css";
//Importing libraries
import { Route, Routes } from "react-router-dom";
//Importing assets
import background from "./assets/desk.jpg";
//Importing pages
import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ProjectsPage from "./pages/ProjectsPage/ProjectsPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
//Importing components
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <img className="background-img" src={background} alt="background" />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/projects" element={<ProjectsPage />}></Route>
        <Route path="/contacts" element={<ContactsPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
