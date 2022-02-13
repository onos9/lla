import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Footer, Header } from "./components/site"
import './App.css'

import {
  NotFound,
  About,
  Blog,
  CMS,
  Contact,
  FAQ,
  Home,
  Potfolio,
  Pricing,
  Product,
  ProductCategory,
  UnderConstruction,
} from "./pages"
import { getLocalSitedata, request } from './helpers/utils'

function App() {

  const handlePost = async (ref) => {
    const data = getLocalSitedata(ref)
    const resp = await request('/content', 'POST', { body: data })
    console.log('RESPONSE: ', resp)
  }

  return (
    <main>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/404" element={ <NotFound post={ handlePost } /> } />
          <Route path="/about" element={ <About post={ handlePost } /> } />
          <Route path="/blog" element={ <Blog post={ handlePost } /> } />
          <Route path="/admin" element={ <CMS /> } />
          <Route path="/contact" element={ <Contact post={ handlePost } /> } />
          <Route path="/faq" element={ <FAQ /> } post={ handlePost } />
          <Route exact path="/" element={ <Home post={ handlePost } /> } />
          <Route path="/potfolio" element={ <Potfolio post={ handlePost } /> } />
          <Route path="/pricing" element={ <Pricing post={ handlePost } /> } />
          <Route path="/productCategory" element={ <ProductCategory post={ handlePost } /> } />
          <Route path="/product" element={ <Product post={ handlePost } /> } />
          <Route path="/underConstruction" element={ <UnderConstruction post={ handlePost } /> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  )
}

export default App
