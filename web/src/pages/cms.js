import React from "react"
import TopOfPage from "../components/topofpage"
import Container from "@mui/material"
import Upload from "../components/uplaod"

import ImagesList from './components/imagesList/ImagesList';
import Nav from './components/Nav';
import Upload from './components/upload/Upload';
import { Container } from '@mui/material';
import AuthContext from './context/AuthContext';
import Modal from './components/Modal';
import MainNotification from './components/MainNotification';
import Loading from './components/Loading';
import Verification from './components/user/Verification';

const imagePool = [
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
  "img/portfolio/masonry6-287x287.jpg",
]

const CMS = () => {

  const onClickHandler = (e) => {

  }

  return (
    <main>
      <TopOfPage />
      <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
        <AuthContext>
          <Loading />
          <Modal />
          <Verification />
          <MainNotification />
          <Nav />
          <Upload />
          <ImagesList />
        </AuthContext>
      </Container>

    </main>
  )
}

export default CMS
