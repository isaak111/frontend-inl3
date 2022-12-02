import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <>
          <div className="navbar">
            <div className="links">
              <a href="/">Main Page</a>
              <a href="/createpost">Create Post</a>
            </div>
          </div>
          <Routes>
            <Route path="/" index element={<MainPage />}></Route>
            <Route path="/createpost" element={<CreatePost />}></Route>
            <Route path="/post:postId" element={<Post />}></Route>

          </Routes>
        </>
      </div>
    </BrowserRouter>
  );
}

export default App;