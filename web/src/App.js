import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"

import './App.css';

import { Footer, Header } from "./components/site";

import {
  NotFound, 
  About,
  Blog, 
  CMS,  
  FAQ,  
  Home,  
  Potfolio,  
  Pricing,  
  Product,  
  ProductCategory, 
  UnderConstruction, 
} from "./pages"

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
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/underConstruction" element={<UnderConstruction />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
