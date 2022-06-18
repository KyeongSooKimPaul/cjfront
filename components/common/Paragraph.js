import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Paragraph = ({ title, inner, line, hrClass }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="m-auto">
            <div className="product-para">
              <h3 style={{ marginTop: '100px', marginBottom: '30px' }}>
                모집 진행중인 프로젝트
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Paragraph
