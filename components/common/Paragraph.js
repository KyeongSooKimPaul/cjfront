import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { FormattedMessage } from "react-intl";

const Paragraph = ({ title, inner, line, hrClass }) => {

  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="m-auto">
            <div className="product-para">
              <h3 style={{ marginTop: '100px', marginBottom: '30px' }}>
                모집중인 프로젝트

              </h3>
              <>
                {/* <video
                  style={{ cursor: 'pointer' }}
                  poster="PATH-TO-STILL-IMAGE"
                  controls="controls"
                  controlsList="nodownload"
                  width="640"
                  height="360"
                  source
                  src=" https://yoyomobucket.s3.ap-northeast-2.amazonaws.com/b841e5dc-e92d-439a-8b8a-9c67e460fb14.wav"
                  type="video/mp4"
                ></video>
                <video
                  style={{ cursor: 'pointer' }}
                  poster="PATH-TO-STILL-IMAGE"
                  controls="controls"
                  controlsList="nodownload"
                  width="640"
                  height="360"
                  source
                  src="https://yoyomobucket.s3.ap-northeast-2.amazonaws.com/ccd768f9-71bd-4fd6-b468-990250ee5473.mp4"
                  type="video/mp4"
                ></video> */}
              </>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}


export default Paragraph
