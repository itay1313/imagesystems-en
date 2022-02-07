import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"

const CategoryTemplate = ({ data }) => {
  const {
    name,
    products: { nodes },
  } = data.wpCategory

  return (
    <Layout>
      <div className="product-section">
        <section className="product-section__odd py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="d-flex flex-column">
                <h2 className="mb-0">{name}</h2>
                {nodes?.map(node => (
                  <Link to={node.uri} key={node.id}>
                    <h3>{node.title}</h3>
                    <div
                      className="hero-content"
                      dangerouslySetInnerHTML={{
                        __html: node.content,
                      }}
                    />
                  </Link>
                ))}
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
    wpCategory(slug: { eq: $slug }) {
      id
      name
      slug
      products {
        nodes {
          id
          slug
          title
          content
          uri
        }
      }
    }
  }
`

export default CategoryTemplate
