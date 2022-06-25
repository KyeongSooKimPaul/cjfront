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
            댄서{' '}
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
            뮤지션{' '}
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
              {/* <FormattedMessage id="프로젝트 리더" /> */}
              프로젝트 오픈까지 D-21
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
                오픈 알림 받기
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
        <h3> 멤버로 선정된 창작자분께 다음과 같은 베네핏을 제공합니다</h3>
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
                에일리언 콘텐츠에
                <br />
                <br />
                음원 쇼케이스
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
                음원 발매 및 유통
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
                메이킹 필름
                <br />
                <br />
                콘텐츠 출연
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
                전문 음악 스튜디오
                <br />
                <br />
                지원
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
                프로젝트 주제
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
                접수 기간
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
                멤버 발표
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
                미정
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
                음원 발매
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
                미정
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
                콘텐츠 공개
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
                미정
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
                92만 글로벌 유튜브 구독자를 보유한 독보적인 스타일의 댄스
                스튜디오
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
                누구보다 프로페셔널하게
                <br />
                체계적인 커리큘럼으로
                <br />
                댄서들의 댄서를 육성하다
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
                저희의 춤에 음악적인 생명을 불어 넣어주세요. <br />
                탈렌티드한 뮤지션 분과 협업할 생각에 벌써 설레네요!
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
                에일리언 콘텐츠에
                <br />
                <br />
                음원 쇼케이스
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
                에일리언 콘텐츠에
                <br />
                <br />
                음원 쇼케이스
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
                음악 창작이 가능한
                <br />
                <br />
                3분
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
                에일리언 콘텐츠에
                <br />
                <br />
                음원 쇼케이스
              </h4>
            </Col>
          </Row>
          <Row>
            <Col>
              <h2 style={{ marginTop: '50px' }}> 지원 전 유의사항</h2>
              <h4
                style={{
                  marginBottom: '30px',
                  lineHeight: '1.5em',
                  textAlign: 'left',
                }}
              >
                - 최종 채택된 프로젝트 음원은 프로젝트 리더와 LEGATIST의 내부
                가이드에 따라 결정됩니다.
                <br />
                - 최소 30초, 최대 1분의 음원으로 지원 후 리더와의 콜라보레이션을
                통해 최대 3분 분량의 완곡을 창작 가능하신 지원자이여야 합니다.
                <br />
                - 지원자 본인 명의의 계정으로 회원가입 후 지원해야 하며,
                회원가입 시 정보 및 연락 가능한 연락처를 정확히 기재하여야
                합니다.
                <br />
                - 제출곡의 저작권(저작재산권, 저작인격권)은 지원자에게
                귀속됩니다.
                <br />
                - 제출곡은 타인의 저작권을 침해하지 않는 본인의 순수
                창작물이어야 합니다.
                <br />
                - 순수 창작물은 작사, 작곡, 편곡의 경우 100% 본인이 창작한
                곡이어야 하며 보컬이나 세션 등은 타인의 도움을 받아도
                무관합니다.
                <br />
                - 샘플링 한 곡은 제출 불가합니다.
                <br />
                - 제출곡의 경우 다른 작품을 표절한 것으로 판명되거나, 기발매곡일
                경우 프로젝트 멤버로서의 자격이 박탈됩니다.
                <br />
                - 일정은 상황에 따라 변경될 수 있습니다.
                <br />
                - 최종 채택된 프로젝트 음원을 지원하신 멤버에게는 개별 연락이 갈
                예정이며, 일정 안에 1차 연락이 되지 않을 경우 자동으로 자격이
                박탈됩니다.
                <br />
                `채택되지 않은 멤버 분들께는 별도 연락이 가지 않을 예정입니다.
                <br />
                - 음원 발매 및 유통에 대한 세부 사항은 협의 하에 진행됩니다.
                <br />- 프로젝트 지원 현황은 ‘MY PAGE’에서 확인하실 수 있습니다.
              </h4>
            </Col>
          </Row>

          <Row>
            <Col>
              <a className="btn btn-solid" style={{marginBottom:"100px"}} onClick={toggle}>
                지원하기
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
                      <Link href={`/`} params={{ product: product }}>
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
