import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PageTemplate = ({ data }) => {
  const { title, content, featuredImage, productQuery } = data.wpProduct
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
        }
      }
    }
  }
`

export default PageTemplate