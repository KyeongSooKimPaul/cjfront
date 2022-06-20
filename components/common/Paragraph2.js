import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Paragraph2 = ({ title, inner, line, hrClass }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="m-auto text-center">
            <div className="product-para">
              <a
                href="/"
                target="_blank"
                className="btn btn-solid"
                style={{
                  fontSize: '24px',
                  marginTop: '100px',
                  marginBottom: '30px',
                }}
              >
                프로젝트 열기
              </a>
            </div>
          </Col>
          <Col lg="12" className="m-auto text-center">
            <div className="product-para">
              <a
                href="/"
                target="_blank"
                className="btn btn-solid"
                style={{
                  fontSize: '24px',
                  marginTop: '100px',
                  marginBottom: '30px',
                }}
              >
                서비스 설문조사
              </a>
            </div>
          </Col>
          <Col lg="12" className="m-auto text-center">
            <div className="product-para">
              <a
                href="/"
                target="_blank"
                className="btn btn-solid"
                style={{
                  fontSize: '24px',
                  marginTop: '100px',
                  marginBottom: '30px',
                }}
              >
                Legatist 소개
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Paragraph2
