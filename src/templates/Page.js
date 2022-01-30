import React, { useRef } from "react"
import { graphql } from "gatsby"
import Slider from "react-slick"

import Layout from "../components/layout"
import FeaturesTemplate from "../components/Features"
import { LeftBtn, RightBtn } from "../utils/imgImport"

const NewsArrowLeft = ({ ...props }) => (
  <button
    {...props}
    className="custom-arrow left"
    aria-hidden="true"
    type="button"
  >
    <img src={LeftBtn} loading="lazy" alt="left arrow" />
  </button>
)

const NewsArrowRight = ({ ...props }) => (
  <button
    {...props}
    className="custom-arrow right"
    aria-hidden="true"
    type="button"
  >
    <img src={RightBtn} loading="lazy" alt="right arrow" />
  </button>
)

const PageTemplate = ({ data }) => {
  const slider = useRef()
  const { title, content, featuredImage, productQuery } = data.wpProduct

  const features_settings = {
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: () => <div className="ft-slick__dots--custom"></div>,
    prevArrow: <NewsArrowLeft />,
    nextArrow: <NewsArrowRight />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Layout>
      <div className="product-section">
        <section className="hero-section">
          <div className="position-relative">
            <img
              srcSet={featuredImage.node?.srcSet}
              loading="lazy"
              alt="product hero"
              className="hero-img"
            />
            <div className="hero-slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1 className="hero-title mb-0">{title}</h1>
                    <div
                      className="hero-content"
                      dangerouslySetInnerHTML={{
                        __html: content,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-section__odd py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4">
                <img
                  loading="lazy"
                  className="w-100"
                  srcSet={productQuery?.section1Image?.srcSet}
                  alt={productQuery?.section1Title}
                />
              </div>
              <div className="col-lg-5 d-flex flex-column">
                <h2 className="mb-0">{productQuery?.section1Title}</h2>
                <div
                  className="my-5"
                  dangerouslySetInnerHTML={{
                    __html: productQuery?.section1Body,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="product-section__even py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 mission-section__detail">
                <h2 className="mb-0">{productQuery?.section2Title}</h2>
                <div
                  className="my-5"
                  dangerouslySetInnerHTML={{
                    __html: productQuery?.section2Body,
                  }}
                />
              </div>
              <div className="col-lg-7 mb-4">
                <img
                  loading="lazy"
                  className="w-100"
                  srcSet={productQuery?.section2Image?.srcSet}
                  alt={productQuery?.section2Title}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="product-section__odd py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-7 mb-4">
                <img
                  loading="lazy"
                  className="w-100"
                  srcSet={productQuery?.section3Image?.srcSet}
                  alt={productQuery?.section3Title}
                />
              </div>
              <div className="col-lg-5 mission-section__detail">
                <h2 className="mb-0">{productQuery?.section3Title}</h2>
                <div
                  className="my-5"
                  dangerouslySetInnerHTML={{
                    __html: productQuery?.section3Body,
                  }}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="product-section__even product-section__features">
          <div className="container">
            <h2>Key features</h2>
            {
              <Slider ref={c => (slider.current = c)} {...features_settings}>
                {productQuery?.keyFeatures.map((item, index) => (
                  <FeaturesTemplate data={item} key={index} />
                ))}
              </Slider>
            }
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpProduct(slug: { eq: $slug }) {
      id
      title
      content
      categories {
        nodes {
          name
          slug
        }
      }
      featuredImage {
        node {
          srcSet
        }
      }
      productQuery {
        fieldGroupName
        section1Body
        section1Title
        section1Image {
          srcSet
        }
        section2Body
        section2Title
        section2Image {
          srcSet
        }
        section3Body
        section3Title
        section2Image {
          srcSet
        }
        keyFeatures {
          title
          content
          buttonName
          buttonLink
          img {
            srcSet
          }
        }
      }
    }
  }
`

export default PageTemplate
