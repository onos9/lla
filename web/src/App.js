import * as React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./pages/home";

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
