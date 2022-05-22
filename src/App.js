import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Posts from "./pages/Posts";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import axios from "axios";

axios.defaults.baseURL = "https://twitter-albison.herokuapp.com";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="login" element={<Login />}></Route>
      <Route path="register" element={<Register />}></Route>
      <Route path="profile" element={<Profile />}></Route>
      <Route path="posts/:id" element={<Posts />}></Route>
    </Routes>
  );
}

export default App;
