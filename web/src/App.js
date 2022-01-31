import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import Cms from "./pages/cms";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";

function App() {
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
});

useEffect(() => {
    setAppState({ loading: true });
    const endpoint = `http://localhost:8080/images`;
    fetch(endpoint)
        .then((res) => res.json())
        .then((repos) => {
            setAppState({ loading: false, repos: repos });

            if (repos === null) {
                let images = document.getElementsByTagName("img")
                let src = Array.from(images).map(img => img.src)
                console.log({ home: src })
            }
        });
}, []);
  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/admin" element={<Cms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  )
}

export default App;
