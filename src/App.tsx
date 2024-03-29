import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./container/pages/Home";

function App() {

  return (
    <>
      <NextUIProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
      </NextUIProvider>
    </>
  )
}

export default App
