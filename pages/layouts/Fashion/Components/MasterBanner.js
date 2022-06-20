import Link from 'next/link'
import { Col, Container, Row } from 'reactstrap'

const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }) => {
  return (
    // console.log("dd", link)
    <div>
      <div
        className={`home ${img} ${classes ? classes : 'text-center'}`}
        style={{ cursor:"pointer", backgroundImage: 'url(' + `${img}` + ')' }}
      >

        <Container>
      
          <Row>
            <Col>
            <Link href={link}>
              <div className="slider-contain">
             
                  <div>
                    <h4>{title}</h4>
                    <h1>{desc}</h1>
                  </div>
               
              </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default MasterBanner
