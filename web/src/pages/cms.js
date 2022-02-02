import React from "react"
import { Container } from '@mui/material';

import { TopOfPage } from "../components/site"
import { AuthContext } from "../context"
import { Verification } from "../components/user"

import {
  ImageList,
  Nav,
  Upload,
  Loading,
  MainNotification,
  Modal,
} from "../components/cms"

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
          <ImageList />
        </AuthContext>
      </Container>

    </main>
  )
}

export default CMS
