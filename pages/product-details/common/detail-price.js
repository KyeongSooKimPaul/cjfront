import React, { useState, useContext } from 'react'
import Link from 'next/link'
import {
  Modal,
  ModalBody,
  ModalHeader,
  Media,
  Input,
  Row,
  Col,
  Container,
} from 'reactstrap'
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext'
import CartContext from '../../../helpers/cart'
import CountdownComponent from '../../../components/common/widgets/countdownComponent'
import MasterSocial from './master_social'
import { start } from 'nprogress'
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import { useParams } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'
import { useRouter } from 'next/router'

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
  const router = useRouter()
  const id = router.query.id
  console.log('props.', useParams())
  const [modal, setModal] = useState(false)
  const CurContect = useContext(CurrencyContext)
  const symbol = CurContect.state.symbol
  const toggle = () => setModal(!modal)
  const product = item
  const context = useContext(CartContext)
  const stock = context.stock
  const plusQty = context.plusQty
  const minusQty = context.minusQty
  const quantity = context.quantity

  const plusQtyforkeep = context.plusQtyforkeep
  const minusQtyforkeep = context.minusQtyforkeep
  const quantityforkeep = context.quantityforkeep

  const quantityforremain = context.quantityforremain
  const orderproduct = context.orderproduct
  const orderproducttotal = context.orderproducttotal
  orderproducttotal(item)

  const uniqueColor = []
  const uniqueSize = []

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const changeQtyforkeep = (e) => {
    setQuantityforkeep(parseInt(e.target.value))
  }
  console.log('router.pathname1', router.asPath)
  console.log('router.pathname1', id)

  return (
    <>
      <div className={`product-right ${stickyClass}`}>
        {/* <h4> <a style={{background:"gray", padding:"10px", borderRadius:"10px", }}> {product.title} </a></h4> */}
        <h4>
          {' '}
          <a
            style={{
              background: '#373434',
              padding: '7px',
              borderRadius: '10px',
              margin: '5px',
            }}
          >
            {' '}
            ??????{' '}
          </a>
          <a
            style={{
              background: '#373434',
              padding: '7px',
              margin: '5px',
              borderRadius: '10px',
            }}
          >
            {' '}
            ?????????{' '}
          </a>
        </h4>

        <div
          className="border-product"
          style={{
            background: '#373434',
            marginTop: '70px',
            marginBottom: '70px',
            padding: '30px',
            borderRadius: '10px',
            border: 0,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <h5
              style={{ color: 'white', float: 'left' }}
              className="product-title"
            >
              {/* <FormattedMessage id="???????????? ??????" /> */}
              ???????????? ???????????? D-21
            </h5>
            <h5
              style={{ color: 'white', float: 'right' }}
              className="product-title"
            >
              {/* <MasterSocial /> */}
              <a
                style={{
                  background: '#ff3d3d',
                  color: 'white',
                  padding: '7px',
                  borderRadius: '5px',
                  margin: '5px',
                }}
              >
                ?????? ?????? ??????
              </a>
              <a
                style={{
                  background: '#ff3d3d',
                  color: 'white',
                  padding: '7px',
                  borderRadius: '5px',
                  margin: '5px',
                }}
              >
                {' '}
                <i className="fa fa-heart" aria-hidden="true"></i>
              </a>
              <a
                style={{
                  background: '#ff3d3d',
                  color: 'white',
                  padding: '7px',
                  borderRadius: '5px',
                  margin: '5px',
                }}
              >
                {' '}
                <i className="fa fa-share" aria-hidden="true"></i>
              </a>
            </h5>
          </div>
        </div>
        <h1> MEMBER BENEFITS</h1>
        <h3> ????????? ????????? ??????????????? ????????? ?????? ???????????? ???????????????</h3>
        <Container>
          <Row style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ???????????? ????????????
                <br />
                <br />
                ?????? ????????????
              </h4>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                CJ ENM
                <br />
                <br />
                ?????? ?????? ??? ??????
              </h4>
            </Col>{' '}
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ????????? ??????
                <br />
                <br />
                ????????? ??????
              </h4>
            </Col>{' '}
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ?????? ?????? ????????????
                <br />
                <br />
                ??????
              </h4>
            </Col>
          </Row>
          <Row style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col>
              <h1> PROJECT INFO</h1>
            </Col>
          </Row>
          <Row style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col xl={3}></Col>
            <Col xl={6}>
              <h2
                style={{
                  background: 'rgb(119 89 14 / 78%)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginBottom: 0,
                }}
              >
                {' '}
                ???????????? ??????
              </h2>
              <h2
                style={{
                  background: 'rgb(24 25 25)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                }}
              >
                {' '}
                YOUR LEGACY
              </h2>
            </Col>
            <Col xl={3}></Col>
          </Row>
          <Row style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col xl={3}>
              <h2
                style={{
                  background: 'rgb(119 89 14 / 78%)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginBottom: 0,
                  fontWeight: 'normal',
                }}
              >
                {' '}
                ?????? ??????
              </h2>
              <h2
                style={{
                  background: 'rgb(24 25 25)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  fontWeight: 'normal',
                }}
              >
                {' '}
                7/13 ~
              </h2>
            </Col>
            <Col xl={3}>
              <h2
                style={{
                  background: 'rgb(119 89 14 / 78%)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginBottom: 0,
                  fontWeight: 'normal',
                }}
              >
                {' '}
                ?????? ??????
              </h2>
              <h2
                style={{
                  background: 'rgb(24 25 25)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  fontWeight: 'normal',
                }}
              >
                {' '}
                ??????
              </h2>
            </Col>
            <Col xl={3}>
              <h2
                style={{
                  background: 'rgb(119 89 14 / 78%)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  fontWeight: 'normal',
                  marginBottom: 0,
                }}
              >
                {' '}
                ?????? ??????
              </h2>
              <h2
                style={{
                  background: 'rgb(24 25 25)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  fontWeight: 'normal',
                }}
              >
                {' '}
                ??????
              </h2>
            </Col>
            <Col xl={3}>
              <h2
                style={{
                  background: 'rgb(119 89 14 / 78%)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  marginBottom: 0,
                  fontWeight: 'normal',
                }}
              >
                {' '}
                ????????? ??????
              </h2>
              <h2
                style={{
                  background: 'rgb(24 25 25)',
                  paddingTop: '10px',
                  paddingBottom: '10px',
                  fontWeight: 'normal',
                }}
              >
                {' '}
                ??????
              </h2>
            </Col>
          </Row>
          <Row
            style={{
              marginTop: '100px',
              marginBottom: '100px',
              textAlign: 'center',
            }}
          >
            <Col>
              <h1> PROJECT LEADER</h1>
              <Media
                src={'/assets/images/projectlogo1.png'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
              <h2 style={{ marginTop: '50px' }}> ALiEN DANCE STUDIO</h2>
              <h4 style={{ marginBottom: '30px' }}>
                {' '}
                92??? ????????? ????????? ???????????? ????????? ???????????? ???????????? ??????
                ????????????
              </h4>

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
              ></video>
              <h3 style={{ marginTop: '50px' }}>
                {' '}
                ???????????? ?????????????????????
                <br />
                ???????????? ??????????????????
                <br />
                ???????????? ????????? ????????????
              </h3>
            </Col>
          </Row>
          <Row>
            <Col xl={4}>
              <Media
                src={'/assets/images/icon/banner_1.jpg'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
            </Col>
            <Col xl={4}>
              <Media
                src={'/assets/images/icon/banner_2.jpg'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
            </Col>
            <Col xl={4}>
              <Media
                src={'/assets/images/icon/banner_3.jpg'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '30px' }}>
            <Col xl={4}>
              <Media
                src={'/assets/images/icon/banner_1.jpg'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
            </Col>
            <Col xl={4}>
              <Media
                src={'/assets/images/icon/banner_2.jpg'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
            </Col>
            <Col xl={4}>
              <Media
                src={'/assets/images/icon/banner_3.jpg'}
                className="img-fluid blur-up lazyload"
                alt=""
                style={{ margin: 'auto' }}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '100px', marginBottom: '100px' }}>
            <Col>
              <h4>
                {' '}
                <a
                  style={{
                    background: '#373434',
                    padding: '7px',
                    borderRadius: '10px',
                    margin: '5px',
                  }}
                >
                  {' '}
                  instagram{' '}
                </a>
                <a
                  style={{
                    background: '#373434',
                    padding: '7px',
                    margin: '5px',
                    borderRadius: '10px',
                  }}
                >
                  {' '}
                  youtube{' '}
                </a>
              </h4>
            </Col>
          </Row>
          <Row>
            <Col style={{ background: '#373434' }}>
              <h2 style={{ marginTop: '50px' }}> LEADER SAYS</h2>
              <h4 style={{ marginBottom: '30px', lineHeight: '1.5em' }}>
                {' '}
                ????????? ?????? ???????????? ????????? ?????? ???????????????. <br />
                ??????????????? ????????? ?????? ????????? ????????? ?????? ????????????!
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ marginTop: '50px', marginBottom: '70px' }}>
                {' '}
                MEMBER RECRUITING
              </h2>
            </Col>
          </Row>

          <Row>
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ???????????? ????????????
                <br />
                <br />
                ?????? ????????????
              </h4>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ???????????? ????????????
                <br />
                <br />
                ?????? ????????????
              </h4>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ?????? ????????? ?????????
                <br />
                <br />
                3???
              </h4>
            </Col>
            <Col xl={3}>
              <h4
                style={{
                  paddingTop: '120px',
                  paddingBottom: '120px',
                  background: '#ff3d3d',
                  borderRadius: '100%',
                }}
              >
                ???????????? ????????????
                <br />
                <br />
                ?????? ????????????
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ marginTop: '50px' }}> ?????? ??? ????????????</h2>
              <h4
                style={{
                  marginBottom: '30px',
                  lineHeight: '1.5em',
                  textAlign: 'left',
                }}
              >
                - ?????? ????????? ???????????? ????????? ???????????? ????????? LEGATIST??? ??????
                ???????????? ?????? ???????????????.
                <br />
                - ?????? 30???, ?????? 1?????? ???????????? ?????? ??? ???????????? ?????????????????????
                ?????? ?????? 3??? ????????? ????????? ?????? ???????????? ?????????????????? ?????????.
                <br />
                - ????????? ?????? ????????? ???????????? ???????????? ??? ???????????? ??????,
                ???????????? ??? ?????? ??? ?????? ????????? ???????????? ????????? ???????????????
                ?????????.
                <br />
                - ???????????? ?????????(???????????????, ???????????????)??? ???????????????
                ???????????????.
                <br />
                - ???????????? ????????? ???????????? ???????????? ?????? ????????? ??????
                ?????????????????? ?????????.
                <br />
                - ?????? ???????????? ??????, ??????, ????????? ?????? 100% ????????? ?????????
                ???????????? ?????? ???????????? ?????? ?????? ????????? ????????? ?????????
                ???????????????.
                <br />
                - ????????? ??? ?????? ?????? ???????????????.
                <br />
                - ???????????? ?????? ?????? ????????? ????????? ????????? ???????????????, ???????????????
                ?????? ???????????? ??????????????? ????????? ???????????????.
                <br />
                - ????????? ????????? ?????? ????????? ??? ????????????.
                <br />
                - ?????? ????????? ???????????? ????????? ???????????? ??????????????? ?????? ????????? ???
                ????????????, ?????? ?????? 1??? ????????? ?????? ?????? ?????? ???????????? ?????????
                ???????????????.
                <br />
                `???????????? ?????? ?????? ???????????? ?????? ????????? ?????? ?????? ???????????????.
                <br />
                - ?????? ?????? ??? ????????? ?????? ?????? ????????? ?????? ?????? ???????????????.
                <br />- ???????????? ?????? ????????? ???MY PAGE????????? ???????????? ??? ????????????.
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <a className="btn btn-solid" style={{marginBottom:"100px"}} onClick={toggle}>
                ????????????
              </a>
            </Col>
          </Row>
        </Container>

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
                <div className="quick-view-img">{product.title}</div>
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
                        margin: 'auto',
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
                        textAlign: 'left',
                        margin: 'auto',
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
                        textAlign: 'left',
                      }}
                    >
                      <h4 style={{ fontWeight: 'bold' }}>???????????? ????????????</h4>
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
                      <Link href={`/`} params={{ product: product }}>
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
      </div>
    </>
  )
}

// export const getStaticProps = async ({ locale }) => {
//   console.log('locale of getStaticProps!!', locale)
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ['common'])),
//     },
//   }
// }

export default DetailsWithPrice
