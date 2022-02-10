import React, { useEffect, useRef, useState } from "react"
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
import CropperDialog from "../components/cms/dialog"
import { request } from "../helpers/utils"


const CMS = () => {

  const cms = useRef(null)
  const [remoteData,setRemoteData] = useState(null)

  useEffect(async () => {
    let resp = await request('GET')
    Object.keys(resp).map(function (key, index) {
      
    });
    setRemoteData(resp)
    if (resp) console.log('RESPONS: ', resp)
  }, [])

  return (
    <main ref={ cms }>
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
            <CropperDialog remoteData={ remoteData} />
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
