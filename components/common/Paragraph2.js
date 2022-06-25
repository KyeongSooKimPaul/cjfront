import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Paragraph2 = ({ title, inner, line, hrClass }) => {
  return (
    <>
      <div style={{ background: 'white' }}>
        <Container style={{paddingTop:"150px", paddingBottom:"150px", textAlign:"center"}}>
          <Row>
            <Col xl={12} style={{ margin: 'auto' }}>
              <h1 style={{ color: 'black' ,marginBottom:"30px"}}>
                OPEN CALL <br />
                FOR PROJECTS
                <br />
                LOOKING FOR MEMBERS
              </h1>{' '}
              <h4 style={{ color: 'black' ,marginBottom:"100px"}}>
                레거티스트에서 당신의 프로젝트 오픈을 요청하고 다양한 창작자를
                모집해보세요
              </h4>{' '}
              <a
                href="/"
                target="_blank"
                style={{
                  fontSize: '24px',
                  border: '1px solid black',
                  borderRadius: '10px',
                  padding: '10px',
                  color:"black"
                
                }}
              >
                프로젝트 요청하기
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  )
}

export default Paragraph2
