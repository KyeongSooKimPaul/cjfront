import React, { useState } from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { Media, Container, Row } from 'reactstrap'
import { useQuery } from '@apollo/client'
import { gql } from '@apollo/client'
import PostLoader from '../../../components/common/PostLoader'
import Lightbox from 'react-image-lightbox'
import { Product5 } from '../../../services/script'

import Slider from 'react-slick'

const Data = [
  { img: '/assets/images/icon/cat1.png', title: '전체', link: '#' },
  { img: '/assets/images/icon/cat2.png', title: '뮤지션', link: '#' },
  { img: '/assets/images/icon/cat3.png', title: ' 댄스/ 퍼포먼스', link: '#' },
  { img: '/assets/images/icon/cat4.png', title: ' 디자이너', link: '#' },
  { img: '/assets/images/icon/cat5.png', title: ' 사진/ 영상', link: '#' },
  { img: '/assets/images/icon/cat6.png', title: ' 기획/ 연출', link: '#' },
  { img: '/assets/images/icon/cat1.png', title: '연기/ 배우', link: '#' },
]

const MasterCategory = ({ img, title, link }) => {
  return (
    <div className="category-block">
      <a href={link}>
        <div className="category-image">
          <Media style={{ height: 'auto' }} src={img} alt="" />
        </div>
      </a>
      <div className="category-details">
        <a href={link}>
          <h5>{title}</h5>
        </a>
      </div>
    </div>
  )
}

const GET_PRODUCTS = gql`
  query products($type: _CategoryType!, $indexFrom: Int!, $limit: Int!) {
    products(type: $type, indexFrom: $indexFrom, limit: $limit) {
      items {
        id
        title
        description
        type
        brand
        category
        price
        new
        sale
        stock
        discount
        variants {
          id
          sku
          size
          color
          image_id
        }
        images {
          image_id
          id
          alt
          src
        }
      }
    }
  }
`

const QUERY_PROUDCTSBYIDFIRSTMUTATION2 = gql`
  query productpage {
    productpage(id: 1) {
      Product(first: 16, orderBy: { id: desc }) {
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

const images = [
  require('../../../public/assets/images/pets/pro/9.jpg'),
  require('../../../public/assets/images/pets/pro/2.jpg'),
  require('../../../public/assets/images/pets/pro/12.jpg'),
  require('../../../public/assets/images/pets/pro/13.jpg'),
  require('../../../public/assets/images/pets/pro/10.jpg'),
  require('../../../public/assets/images/pets/pro/11.jpg'),
  require('../../../public/assets/images/pets/pro/14.jpg'),
  require('../../../public/assets/images/pets/pro/8.jpg'),
]

const fashionImages = [
  require('../../../public/assets/images/pro3/39.jpg'),
  require('../../../public/assets/images/pro3/3.jpg'),
  require('../../../public/assets/images/pro3/1.jpg'),
  require('../../../public/assets/images/pro3/8.jpg'),
  require('../../../public/assets/images/pro3/9.jpg'),
  require('../../../public/assets/images/pro3/11.jpg'),
  require('../../../public/assets/images/pro3/13.jpg'),
  require('../../../public/assets/images/pro3/14.jpg'),
]

const bagImages = [
  require('../../../public/assets/images/pro1/1.jpg'),
  require('../../../public/assets/images/pro1/4.jpg'),
  require('../../../public/assets/images/pro1/10.jpg'),
  require('../../../public/assets/images/pro1/2.jpg'),
  require('../../../public/assets/images/pro1/16.jpg'),
  require('../../../public/assets/images/pro1/7.jpg'),
  require('../../../public/assets/images/pro1/4.jpg'),
  require('../../../public/assets/images/pro1/12.jpg'),
]

const shoesImages = [
  require('../../../public/assets/images/pro/1.jpg'),
  require('../../../public/assets/images/pro/16.jpg'),
  require('../../../public/assets/images/pro/23.jpg'),
  require('../../../public/assets/images/pro/26.jpg'),
  require('../../../public/assets/images/pro/6.jpg'),
  require('../../../public/assets/images/pro/33.jpg'),
  require('../../../public/assets/images/pro/37.jpg'),
  require('../../../public/assets/images/pro/13.jpg'),
]
const watchImages = [
  require('../../../public/assets/images/pro2/2.jpg'),
  require('../../../public/assets/images/pro2/3.jpg'),
  require('../../../public/assets/images/pro2/6.jpg'),
  require('../../../public/assets/images/pro2/15.jpg'),
  require('../../../public/assets/images/pro2/8.jpg'),
  require('../../../public/assets/images/pro2/9.jpg'),
  require('../../../public/assets/images/pro2/13.jpg'),
  require('../../../public/assets/images/pro2/4.jpg'),
]

const GridTwoPage = ({ colClass, limit }) => {
  const l = parseInt(limit)
  const [activeTab, setActiveTab] = useState('pets')
  const initilindex = { index: 0, isOpen: false }
  const [photoIndex, setPhotoIndex] = useState(initilindex)

  // var { loading, data } = useQuery(GET_PRODUCTS, {
  //   variables: {
  //     type: activeTab,
  //     indexFrom: 0,
  //     limit: parseInt(l),
  //   },
  // });

  var { loading, data, error } = useQuery(QUERY_PROUDCTSBYIDFIRSTMUTATION2, {
    variables: {
      id: 1,
    },
    onCompleted: (data) => {
      console.log('da', data)
    },
  })

  const MasterTabPannel = ({ img }) => {
    return (
      <>
        {!data ||
        !data.productpage ||
        data.productpage.Product.length === 0 ||
        loading ? (
          <PostLoader />
        ) : (
          <>
            <Slider {...Product5} className="slide-6 arrow">
              {Data.map((data, i) => {
                return (
                  <MasterCategory
                    key={i}
                    img={data.img}
                    link={data.link}
                    title={data.title}
                  />
                )
              })}
            </Slider>
            {data &&
              data.productpage.Product?.map((product, index) => (
                <div
                  className={`isotopeSelector filter fashion ${colClass}`}
                  key={index}
                >
                  <div className="overlay">
                    <div>
                      <a>
                        <div
                          className="overlay-background"
                          style={{
                            border: '0',
                            cursor: 'pointer',
                            margin: 'auto',
                          }}
                          onClick={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              index: index,
                              isOpen: true,
                            })
                          }
                        >
                          <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                        <Media
                          src={JSON.parse(product.images)[0]}
                          className="img-fluid blur-up lazyload bg-img"
                        />
                      </a>
                      {/* {photoIndex.isOpen && (
                        <Lightbox
                          mainSrc={img[photoIndex.index]}
                          nextSrc={img[(photoIndex.index + 1) % img.length]}
                          prevSrc={
                            images[
                              (photoIndex.index + img.length - 1) % img.length
                            ]
                          }
                          imageTitle={photoIndex.index + 1 + "/" + img.length}
                          onCloseRequest={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              isOpen: false,
                            })
                          }
                          onMovePrevRequest={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              index:
                                (photoIndex.index + img.length - 1) %
                                img.length,
                            })
                          }
                          onMoveNextRequest={() =>
                            setPhotoIndex({
                              ...photoIndex,
                              index: (photoIndex.index + 1) % img.length,
                            })
                          }
                        />
                      )} */}
                    </div>
                  </div>
                </div>
              ))}
          </>
        )}
      </>
    )
  }

  return (
    <section className="portfolio-section grid-portfolio ratio2_3 portfolio-padding">
      <Container>
        <Tabs>
          <TabList align="center" id="form1">
            <Tab
              className={`filter-button project_button ${
                activeTab == 'pets' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('pets')}
              data-filter="all"
            >
              All
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == 'fashion' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('fashion')}
              data-filter="fashion"
            >
              Fashion
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == 'bags' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('bags')}
              data-filter="bags"
            >
              Bags
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == 'shoes' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('shoes')}
              data-filter="shoes"
            >
              Shoes
            </Tab>
            <Tab
              className={`filter-button project_button ${
                activeTab == 'watch' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('watch')}
              data-filter="watch"
            >
              Watch
            </Tab>
          </TabList>
          <Row className="row zoom-gallery">
            <TabPanel>
              <MasterTabPannel img={images} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={fashionImages} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={bagImages} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={shoesImages} />
            </TabPanel>
            <TabPanel>
              <MasterTabPannel img={watchImages} />
            </TabPanel>
          </Row>
        </Tabs>
      </Container>
    </section>
  )
}

export default GridTwoPage
