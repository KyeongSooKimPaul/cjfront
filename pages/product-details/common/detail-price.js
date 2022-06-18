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
} from 'reactstrap'
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext'
import CartContext from '../../../helpers/cart'
import CountdownComponent from '../../../components/common/widgets/countdownComponent'
import MasterSocial from './master_social'
import { start } from 'nprogress'

const DetailsWithPrice = ({ item, stickyClass, changeColorVar }) => {
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

  return (
    <>
      <div className={`product-right ${stickyClass}`}>
        <h2> {product.title} </h2>

        <div className="border-product">
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
              프로젝트 리더
            </h5>
            <h5
              style={{ color: 'white', float: 'right' }}
              className="product-title"
            >
              {/* <MasterSocial /> */}
              김철수
            </h5>
          </div>
        </div>

        <div className="border-product">
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
                프로젝트 분야
            </h5>
            <h5
              style={{ color: 'white', float: 'right' }}
              className="product-title"
            >
              {/* <MasterSocial /> */}
   음악
            </h5>
          </div>
        </div>
        
        <div className="border-product">
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
                프로젝트 등록일
            </h5>
            <h5
              style={{ color: 'white', float: 'right' }}
              className="product-title"
            >
              {/* <MasterSocial /> */}
             2022년 07월 11일
            </h5>
          </div>
        </div>
        

        <div className="product-buttons">
          <a
            href={null}
            className="btn btn-solid"
            onClick={() => context.addToCart(product, quantity)}
          >
            관심 프로젝트 넣기
          </a>

          <a className="btn btn-solid" onClick={toggle}>
            지원하기
          </a>
        </div>
        {/* <div className="border-product">
          <h6 className="product-title">종료까지 남은 시간</h6>
          <CountdownComponent />
        </div> */}
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
                      <Link
                        href={`/`}
                        params={{ product: product }}
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
      </div>
    </>
  )
}

export default DetailsWithPrice
