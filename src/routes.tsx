import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostList from "./components/posts/postList";
import ThemeList from "./components/themeList";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/themes" element={<ThemeList />} />
        <Route path="/posts" element={<PostList />} />
      </Routes>
    </BrowserRouter>
  )
}