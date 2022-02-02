import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

import Footer from "./components/site";
import Header from "./components/site";

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
import ProductCategory from './pages/productCategory';
import UnderConstruction from './pages/underConstruction';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/404" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/admin" element={<CMS />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/potfolio" element={<Potfolio />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product_category" element={<ProductCategory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/under_construction" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
