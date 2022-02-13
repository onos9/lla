import React, { useRef } from "react"
import { Container, StyledEngineProvider } from '@mui/material'
import { AuthContext } from "../context"
import { Verification } from "../components/user"

import {
  Nav,
  Upload,
  Loading,
  MainNotification,
  Modal,
} from "../components/cms"
import Top from "../components/cms/top"
import CropperDialog from "../components/cms/dialog"

const CMS = () => {

  const cms = useRef(null)
  return (
    <main ref={ cms }>
      <Top />
      <Container maxWidth="lg" sx={ { textAlign: 'center', mt: '3rem' } }>
        <StyledEngineProvider injectFirst>
          <AuthContext>
            <Loading />
            <Modal />
            <Verification />
            <MainNotification />
            <Nav />
            <Upload />
            <div id="tabBlog">
              <CropperDialog />
            </div>
            <div id="calender">

            </div>
            <div id="archives">

            </div>
          </AuthContext>
        </StyledEngineProvider>
      </Container>


    </main>
  )
}

export default CMS
