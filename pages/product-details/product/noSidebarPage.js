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
                        <Col lg="6" className="product-thumbnail">
                          <Slider
                            {...products}
                            asNavFor={nav2}
                            ref={(slider) => (slider1.current = slider)}
                            className="product-slick"
                          >
                            {JSON.parse(data.product.images).map(
                              (vari, index) => (
                                <div key={index}>
                                  <ImageZoom image={vari} />
                                </div>
                              ),
                            )}
                          </Slider>
                          {/* <Slider
                            className="slider-nav"
                            {...productsnav}
                            asNavFor={nav1}
                            ref={(slider) => (slider2.current = slider)}
                          >
                            {data.product.variants
                              ? JSON.parse(data.product.images).map(
                                  (vari, index) => (
                                    <div key={index}>
                                      <Media
                                        src={`${vari}`}
                                        key={index}
                                        className="img-fluid"
                                      />
                                    </div>
                                  ),
                                )
                              : ''}
                          </Slider> */}
                        </Col>
                        <Col lg="6" className="rtl-text">
                          <DetailsWithPrice
                            changeColorVar={changeColorVar}
                            item={data.product}
                          />
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12" className="rtl-text">
                          <h3
                            style={{
                              textAlign: 'left',
                              marginTop: '50px',
                            }}
                          >
                            프로젝트 상세 내용
                          </h3>
                          <div
                          style={{width:"100%"}}
                            dangerouslySetInnerHTML={{
                              __html: data.product.description,
                              width:"100%"
                            }}
                          ></div>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12" className="rtl-text">
                          <h3
                            style={{
                              textAlign: 'left',
                              marginTop: '50px',
                            }}
                          >
                            프로젝트 리더 프로필 보러가기
                          </h3>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12" className="rtl-text">
                          <div className="product-buttons">
                            <a className="btn btn-solid" onClick={toggle}>
                              지원하기
                            </a>
                          </div>
                        </Col>
                      </Row>
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
                          <h4 style={{ fontWeight: 'bold' }}>이메일</h4>
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
                          <h4 style={{ fontWeight: 'bold' }}>활동분야</h4>
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
                          <h4 style={{ fontWeight: 'bold' }}>선호하는 소통방식</h4>
                        </Col>
                        <Col
                          lg="6"
                          xs="6"
                          style={{
                            textAlign: 'center',
                          }}
                        >
                          <h4 style={{ fontWeight: 'bold' }}>비대면</h4>
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
                            취소
                          </button>
                        </Col>
                        <Col lg="6" xs="6">
                          <Link
                            href={`/`}
                            params={{ product: data.product }}
                          >
                            <a
                              className="btn btn-solid"
                              style={{
                                width: '100%',
                              }}
                            >
                             참여하기
                            </a>
                          </Link>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </ModalBody>
            </Modal>
          ):(
            <></>
          ) }
        </div>
      </section>
    </>
  )
}

export default NoSidebarPage
