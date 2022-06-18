import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Paragraph2 = ({ title, inner, line, hrClass }) => {
  return (
    <>
      <Container>
        <Row>
          <Col lg="12" className="m-auto">
            <div className="product-para">
              <h3 style={{ marginTop: '100px', marginBottom: '30px' }}>
                오픈 예정 프로젝트
              </h3>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Paragraph2
