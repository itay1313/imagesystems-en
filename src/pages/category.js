import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from "../components/Card"
import { BgCategory } from "../utils/imgImport"

const CategoryPage = ({ data }) => {
  const products = data?.allWpProduct.nodes
  const features = products
    .filter(item => item.productQuery.keyFeatures !== null)
    .map(item => item.productQuery.keyFeatures)
  const res = [].concat.apply([], features)

  return (
    <Layout>
      <Seo title="Category Page" />
      <div className="category-page">
        <section className="hero-section">
          <div className="position-relative">
            <img
              src={BgCategory}
              loading="lazy"
              alt="product hero"
              className="hero-img"
            />
            <div className="hero-slide">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <h1 className="hero-title mb-0">
                      Features of Image Systems software
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="category-header my-5 pt-3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6">
                <h1>Browse our features</h1>
                <p>
                  Nostrud proident incididunt consectetur tempor non velit
                  reprehenderit enim proident. Eiusmod culpa aliquip irure et do
                  mollit cupidatat.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="category-content py-5">
          <div className="container">
            <div className="row">
              {res?.map((feature, index) => (
                <div className="col-12 col-md-6 col-lg-4">
                  <Card data={feature} key={index} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    allWpProduct {
      nodes {
        title
        uri
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
        slug
        productQuery {
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
  }
`

export default CategoryPage
