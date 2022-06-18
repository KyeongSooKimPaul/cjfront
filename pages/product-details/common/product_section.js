import React, { useContext, useState } from 'react'
import { Container, Row, Col, Media, Modal, ModalBody } from 'reactstrap'
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import { CurrencyContext } from '../../../helpers/Currency/CurrencyContext'
import CartContext from '../../../helpers/cart'
import { WishlistContext } from '../../../helpers/wishlist/WishlistContext'
import { CompareContext } from '../../../helpers/Compare/CompareContext'
import { useRouter } from 'next/router'

const GET_PRODUCTS = gql`
  query productpage {
    productpage(id: 1) {
      Product(first: 4, orderBy: { id: desc }, after: { id: 20 }) {
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
  }
`
const ProductSection = () => {
  const router = useRouter()
  const curContext = useContext(CurrencyContext)
  const wishlistContext = useContext(WishlistContext)
  const compareContext = useContext(CompareContext)
  const symbol = curContext.state.symbol
  const currency = curContext.state
  const cartCtx = useContext(CartContext)
  const addToCart = cartCtx.addToCart
  const quantity = cartCtx.quantity
  const plusQty = cartCtx.plusQty
  const minusQty = cartCtx.minusQty
  const setQuantity = cartCtx.setQuantity
  const [selectedProduct, setSelectedProduct] = useState()
  const [modal, setModal] = useState(false)
  const toggle = () => setModal(!modal)
  const uniqueTags = []

  const changeQty = (e) => {
    setQuantity(parseInt(e.target.value))
  }

  const clickProductDetail = (product) => {
    console.log('clickProductDetail', product)
    const titleProps = product.title.split(' ').join('')
    router.push(`/product-details/${product.id}`)
  }

  const getSelectedProduct = (item) => {
    setSelectedProduct(item)
    toggle()
  }

  var { loading, data } = useQuery(GET_PRODUCTS, {
    variables: {
      id: 1,
    },
  })

  return (
    <section className="section-b-space ratio_asos">
      <Container>
        <Row>
          <Col className="product-related">
            <h3>당신을 기다리는 또 다른 프로젝트</h3>
          </Col>
        </Row>
        <Row className="search-product">
          {!data || loading ? (
            ''
          ) : (
            <>
              {data &&
                data.productpage.Product?.map((product, index) => (
                  <Col xl="3" md="4" sm="6" key={index}>
                    <div className="product-box">
                      <div className="img-wrapper">
                        <div className="front">
                          <a href={null}>
                            {console.log('data', product)}
                            <Media
                              style={{ cursor: 'pointer' }}
                              onClick={() => clickProductDetail(product)}
                              src={`${
                                product.images
                                  ? JSON.parse(product.images)[0]
                                  : JSON.parse(product.images)[0]
                              }`}
                              className="img-fluid blur-up lazyload bg-img"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="back">
                          <a href={null}>
                            <Media
                              src={product.images[1].src}
                              className="img-fluid blur-up lazyload bg-img"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="cart-info cart-wrap">
                          {/* <button
                            data-toggle="modal"
                            data-target="#addtocart"
                            title="관심 프로젝트 넣기"
                            onClick={() => addToCart(product, quantity)}
                          >
                            <i className="fa fa-shopping-cart"></i>
                          </button> */}
                          {/* <a
                            href="#"
                            onClick={() => wishlistContext.addToWish(product)}
                            title="Add to Wishlist"
                          >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                          </a> */}
                          {/* <a
                            href="#"
                            onClick={() => getSelectedProduct(product)}
                            data-toggle="modal"
                            data-target="#quick-view"
                            title="Quick View"
                          >
                            <i className="fa fa-search" aria-hidden="true"></i>
                          </a> */}
                          {/* <a
                            href="#"
                            onClick={() => compareContext.addToCompare(product)}
                            title="Compare"
                          >
                            <i className="fa fa-refresh" aria-hidden="true"></i>
                          </a> */}
                        </div>
                      </div>
                      <div className="product-detail">
                        {/* <div className="rating">
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>{" "}
                          <i className="fa fa-star"></i>
                        </div> */}
                        <a href={null}>
                          <h6>{product.title}</h6>
                        </a>

                        {/* <ul className="color-variant">
                          <li className="bg-light0"></li>
                          <li className="bg-light1"></li>
                          <li className="bg-light2"></li>
                        </ul> */}
                      </div>
                    </div>
                  </Col>
                ))}
            </>
          )}
        </Row>
        {selectedProduct ? (
          <Modal
            isOpen={modal}
            toggle={toggle}
            className="modal-lg quickview-modal"
            centered
          >
            <ModalBody>
              <Row>
                <Col lg="6" xs="12">
                  <div className="quick-view-img">
                    <Media
                      src={`${selectedProduct.images[0].src}`}
                      alt=""
                      className="img-fluid"
                    />
                  </div>
                </Col>
                <Col lg="6" className="rtl-text">
                  <div className="product-right">
                    <h2> {selectedProduct.title} </h2>
                    <h3>
                      {currency.symbol}
                      {(selectedProduct.price * currency.value).toFixed(2)}
                    </h3>
                    {selectedProduct.variants ? (
                      <ul className="color-variant">
                        {uniqueTags ? (
                          <ul className="color-variant">
                            {selectedProduct.type === 'jewellery' ||
                            selectedProduct.type === 'nursery' ||
                            selectedProduct.type === 'beauty' ||
                            selectedProduct.type === 'electronics' ||
                            selectedProduct.type === 'goggles' ||
                            selectedProduct.type === 'watch' ||
                            selectedProduct.type === 'pets' ? (
                              ''
                            ) : (
                              <>
                                {uniqueTags ? (
                                  <ul className="color-variant">
                                    {uniqueTags.map((vari, i) => {
                                      return (
                                        <li
                                          className={vari.color}
                                          key={i}
                                          title={vari.color}
                                          onClick={() =>
                                            variantChangeByColor(
                                              vari.image_id,
                                              selectedProduct.images,
                                            )
                                          }
                                        ></li>
                                      )
                                    })}
                                  </ul>
                                ) : (
                                  ''
                                )}
                              </>
                            )}
                          </ul>
                        ) : (
                          ''
                        )}
                      </ul>
                    ) : (
                      ''
                    )}
                    <div className="border-product">
                      <h6 className="product-title">product details</h6>
                      <p>{selectedProduct.description}</p>
                    </div>
                    <div className="product-description border-product">
                      {selectedProduct.size ? (
                        <div className="size-box">
                          <ul>
                            {selectedProduct.size.map((size, i) => {
                              return (
                                <li key={i}>
                                  <a href={null}>{size}</a>
                                </li>
                              )
                            })}
                          </ul>
                        </div>
                      ) : (
                        ''
                      )}
                      <h6 className="product-title">quantity</h6>
                      <div className="qty-box">
                        <div className="input-group">
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-left-minus"
                              onClick={minusQty}
                              data-type="minus"
                              data-field=""
                            >
                              <i className="fa fa-angle-left"></i>
                            </button>
                          </span>
                          <input
                            type="text"
                            name="quantity"
                            value={quantity}
                            onChange={changeQty}
                            className="form-control input-number"
                          />
                          <span className="input-group-prepend">
                            <button
                              type="button"
                              className="btn quantity-right-plus"
                              onClick={() => plusQty(selectedProduct)}
                              data-type="plus"
                              data-field=""
                            >
                              <i className="fa fa-angle-right"></i>
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="product-buttons">
                      <button
                        className="btn btn-solid"
                        onClick={() => addToCart(selectedProduct, quantity)}
                      >
                        관심 프로젝트 넣기
                      </button>
                      <button
                        className="btn btn-solid"
                        onClick={() => clickProductDetail(selectedProduct)}
                      >
                        View detail
                      </button>
                    </div>
                  </div>
                </Col>
              </Row>
            </ModalBody>
          </Modal>
        ) : (
          ''
        )}
      </Container>
    </section>
  )
}

export default ProductSection