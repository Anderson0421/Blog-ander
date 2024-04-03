import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./container/pages/Home";
import PostDetail from "./container/components/PostDetail";
import Categorie from "./container/pages/Categorie";

function App() {

  return (
    <>
      <NextUIProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path={`post/:id/detail`} element={<PostDetail />} />
              <Route path={`categories/:slug/`} element={<Categorie />} />
            </Routes>
          </Router>
      </NextUIProvider>
    </>
  )
}

export default App
