import React from "react"
import { Container } from '@mui/material'
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
import Top from "../components/cms/top"


const CMS = () => {
  return (
    <main>
      <Top />
      <Container maxWidth="lg" sx={ { textAlign: 'center', mt: '3rem' } }>
        <AuthContext>
          <Loading />
          <Modal />
          <Verification />
          <MainNotification />
          <Nav />
          <Upload />
          <div id="tabBlog">
            <ImageList />
          </div>
          <div id="calender">

          </div>
          <div id="archives">

          </div>
        </AuthContext>
      </Container>

    </main>
  )
}

export default CMS
