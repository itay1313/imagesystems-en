import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PageTemplate = ({ data }) => {
  const { title, categories, featuredImage, productQuery } = data.wpProduct
  return (
    <Layout>
      {/* <section className="hero-section">
        <div className="position-relative">
          <img
            srcSet={featuredImage.node?.srcSet}
            loading="lazy"
            alt="product hero"
            className="hero-img"
          />
        </div>
      </section> */}
      <section className="mission-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-4">
              <img
                loading="lazy"
                className="w-100"
                srcSet={productQuery?.section1Image?.srcSet}
                alt={productQuery?.section1Title}
              />
            </div>
            <div className="col-lg-5 mission-section__detail">
              <h2 className="mb-0">{productQuery?.section1Title}</h2>
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: productQuery?.section1Body }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <img
            srcSet={productQuery.section1Image?.srcSet}
            loading="lazy"
            alt={productQuery.section1Title}
          />
          <h1>{productQuery.section1Title}</h1>
          <div
            dangerouslySetInnerHTML={{ __html: productQuery.section1Body }}
          />
        </div>
      </section>
      <section>
        <img
          srcSet={productQuery.section2Image?.srcSet}
          loading="lazy"
          alt={productQuery.section2Title}
        />
        <h1>{productQuery.section2Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: productQuery.section2Body }} />
      </section>
      <section>
        <img
          srcSet={productQuery.section3Image?.srcSet}
          loading="lazy"
          alt={productQuery.section3Title}
        />
        <h1>{productQuery.section3Title}</h1>
        <div dangerouslySetInnerHTML={{ __html: productQuery.section3Body }} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpProduct(slug: { eq: $slug }) {
      id
      title
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