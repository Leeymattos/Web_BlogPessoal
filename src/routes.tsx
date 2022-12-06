import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeletePost from "./components/posts/deletePost";
import PostList from "./components/posts/listPost";
import RegisterPost from "./components/posts/resgisterPost";
import Navbar from "./components/stactic/navbar";
import DeleteTheme from "./components/themes/deleteTheme";
import RegisterTheme from "./components/themes/registerTheme";
import ThemeList from "./components/themes/themeList";
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path="/themes" element={<ThemeList />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/formPost" element={<RegisterPost />} />
        <Route path="/formTheme" element={<RegisterTheme />} />
        <Route path="/formPost/:id" element={<RegisterPost />} />
        <Route path="/formTheme/:id" element={<RegisterTheme />} />
        <Route path="/deletePost/:id" element={<DeletePost />} />
        <Route path="/deleteTheme/:id" element={<DeleteTheme />} />
      </Routes>
    </BrowserRouter>
  )
}