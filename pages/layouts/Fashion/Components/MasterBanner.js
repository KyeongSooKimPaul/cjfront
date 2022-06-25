import Link from 'next/link'
import { Col, Container, Row,Button } from 'reactstrap'

const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }) => {
  return (
    // console.log("dd", link)
    <div>
      <div
        className={`home ${img} ${classes ? classes : 'text-center'}`}
        style={{whiteSpace:"pre-wrap", cursor:"pointer", backgroundImage: 'url(' + `${img}` + ')' }}
      >

        <Container>
      
          <Row>
            <Col>
            <Link href={link}>
              <div className="slider-contain">
             
                  <div >
                    <h4 style={{ color:"white !important", }}>{title}</h4>
                    <h1 style={{ color:"white !important", }}>{desc}</h1>
                    <a  href={link}> <h4 ><a>프로젝트 자세히 보기</a></h4></a>
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
