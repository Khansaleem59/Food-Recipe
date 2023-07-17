import "./App.css";
import Recipes from "./Components/Recipes";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/Signup";
import AddRecipe from "./Components/AddRecipe";

// import Recipes from './Components/Recipes';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route element={<Navigate to="/Home" />} path="home" />
          <Route element={<Home />} path="home" />
          <Route element={<Login />} path="login" />
          <Route element={<Recipes />} path="recipe" />
          <Route element={<SignUp />} path="signup" />
          <Route element={<AddRecipe />} path="addrecipe" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
