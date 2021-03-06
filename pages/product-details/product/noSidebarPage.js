import React, { useEffect, useState, useRef } from 'react'
import ProductTab from '../common/product-tab'
import Slider from 'react-slick'
import { useRouter } from 'next/router'
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import ImageZoom from '../common/image-zoom'
import DetailsWithPrice from '../common/detail-price'
import Link from 'next/link'
import { Row, Col, Container, Media, Modal, ModalBody } from 'reactstrap'

const GET_SINGLE_PRODUCTS = gql`
  query product($id: Int!) {
    product(id: $id) {
      id
      title
      description
      type
      brand
      category
      price
      newproduct
      sale
      stock
      discount
      variants
      images
    }
  }
`

const NoSidebarPage = () => {
  const router = useRouter()
  const id = router.query.id
  console.log('dfdf', router.query)
  const [state, setState] = useState({ nav1: null, nav2: null })
  const slider1 = useRef()
  const slider2 = useRef()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  var { loading, data } = useQuery(GET_SINGLE_PRODUCTS, {
    variables: {
      id: Number(router.query.id),
    },
  })
  var products = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    fade: true,
  }
  var productsnav = {
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
  }

  const filterClick = () => {
    document.getElementById('filter').style.left = '-15px'
  }

  const changeColorVar = (img_id) => {
    slider2.current.slickGoTo(img_id)
  }

  useEffect(() => {
    console.log('result', data)
    setState({
      nav1: slider1.current,
      nav2: slider2.current,
    })
  }, [data])

  const { nav1, nav2 } = state

  const MasterBanner = ({ img, title, desc, link, classes, btn, btnClass }) => {
    return (
      // console.log("dd", link)
      <div>
        <div
          className={`home ${img} ${classes ? classes : 'text-center'}`}
          style={{
            whiteSpace: 'pre-wrap',
            cursor: 'pointer',
            backgroundImage: 'url(' + `${img}` + ')',
          }}
        >
          <Container>
            <Row>
              <Col>
                <Link href={link}>
                  <div className="slider-contain" id="custom1">
                    <div>
                      <h4
                        style={{
                          color: 'black !important',
                          textAlign: 'center !important',
                        }}
                      >
                        {title}
                      </h4>
                      <a href={link}>
                        {' '}
                        <h4>
                          <a style={{ color: 'black !important' }}>
                            ???????????? ????????? ??????
                          </a>
                        </h4>
                      </a>
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

  return (
    <>
      <section className="">
        <div className="collection-wrapper">
          <Container>
            <Row>
              <Col sm="12" xs="12">
                <div className="container-fluid">
                  {!data ||
                  !data.product ||
                  data.product.length === 0 ||
                  loading ? (
                    'loading'
                  ) : (
                    <>
                      <Row>
                        <Col lg="12" className="product-thumbnail">
                          {console.log('ddd', data.product)}
                          <Slider
                            {...products}
                            asNavFor={nav2}
                            ref={(slider) => (slider1.current = slider)}
                            className="slide-1 home-slider"
                          >
                            <MasterBanner
                              img={JSON.parse(data.product.images)}
                              title={data.product.title}
                              link={'/'}
                            />
                          </Slider>
                        </Col>
                        <Col
                          lg="12"
                          className="rtl-text"
                          style={{ textAlign: 'center', marginTop: '50px' }}
                        >
                          <DetailsWithPrice
                            changeColorVar={changeColorVar}
                            item={data.product}
                          />
                        </Col>
                      </Row>
                      {/* <Row>
                        <Col lg="12" className="rtl-text">
                          <h3
                            style={{
                              textAlign: 'left',
                              marginTop: '50px',

                            }}
                          >
                           ???????????? ?????? ??????
                          </h3>
                          <div
                            style={{ width: '100%' }}
                            dangerouslySetInnerHTML={{
                              __html: data.product.description,
                              width: '100%',
                            }}
                          ></div>
                        </Col>
                      </Row> */}
                      {/*                    
                      <Row>
                        <Col lg="12" className="rtl-text">
                          <div className="product-buttons">
                            <a className="btn btn-solid" onClick={toggle}>
                              ????????????
                            </a>
                          </div>
                        </Col>
                      </Row> */}
                    </>
                  )}
                </div>
                {/* <ProductTab  item={data.product} /> */}
              </Col>
            </Row>
          </Container>
          {data && data.product ? (
            <Modal
              isOpen={modal}
              toggle={toggle}
              className="modal-md quickview-modal"
              centered
            >
              <ModalBody>
                <Row>
                  <Col
                    lg="12"
                    xs="12"
                    style={{
                      textAlign: 'left',
                    }}
                  >
                    <div className="quick-view-img">{data.product.title}</div>
                    <hr />
                    <div
                      className="product-description border-product"
                      style={{ marginTop: '30px' }}
                    >
                      <Row>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'left',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>?????????</h4>
                        </Col>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>1234@gmail.com</h4>
                        </Col>
                      </Row>
                    </div>{' '}
                    <hr />
                    <div
                      className="product-description border-product"
                      style={{ marginTop: '30px' }}
                    >
                      <Row>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'left',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>????????????</h4>
                        </Col>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>22222</h4>
                        </Col>
                      </Row>
                    </div>{' '}
                    <hr />
                    <div
                      className="product-description border-product"
                      style={{ marginTop: '30px' }}
                    >
                      <Row>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'left',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>
                            ???????????? ????????????
                          </h4>
                        </Col>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>?????????</h4>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                    <div
                      className="product-description border-product"
                      style={{ marginTop: '30px' }}
                    >
                      <Row>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          <button
                            className="btn btn-solid"
                            onClick={() => setModal(!modal)}
                            style={{
                              width: '100%',
                            }}
                          >
                            ??????
                          </button>
                        </Col>
                        <Col lg="6" xs="6">
                          <Link href={`/`} params={{ product: data.product }}>
                            <a
                              className="btn btn-solid"
                              style={{
                                width: '100%',
                              }}
                            >
                              ????????????
                            </a>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          ) : (
            <></>
          )}
        </div>
      </section>
    </>
  )
}

export default NoSidebarPage
