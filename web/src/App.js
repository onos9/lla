import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';
import Footer from "./components/footer";
import Header from "./components/header";
import NotFound from './pages/404';
import About from './pages/about';
import Blog from './pages/blog';
import CMS from "./pages/cms";
import Contact from './pages/contact';
import FAQ from './pages/faq';
import Home from "./pages/home";
import Potfolio from './pages/potfolio';
import Pricing from './pages/pricing';
import Product from './pages/product';
import ProductCategory from './pages/product_category';
import UnderConstruction from './pages/under_construction';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/admin" element={<NotFound />} />
          <Route path="/admin" element={<About />} />
          <Route path="/admin" element={<Blog />} />
          <Route path="/admin" element={<CMS />} />
          <Route path="/admin" element={<Contact />} />
          <Route path="/admin" element={<FAQ />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/admin" element={<Potfolio />} />
          <Route path="/admin" element={<Pricing />} />
          <Route path="/admin" element={<ProductCategory />} />
          <Route path="/admin" element={<Product />} />
          <Route path="/admin" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
