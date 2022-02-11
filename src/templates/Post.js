import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { author, title, content, featuredImage } = data.wpPost
  return (
    <Layout>
      <div className="post-section">
        <section className="hero-section">
          <div className="position-relative">
            <img
              srcSet={featuredImage?.node?.srcSet}
              loading="lazy"
              alt="product hero"
              className="hero-img"
            />
          </div>
        </section>
        <section>
          <div className="container my-5 py-5">
            <h1>{title}</h1>
            <div className="post-section__author mt-1">
              <img
                loading="lazy"
                className="author-photo"
                src={author?.node?.avatar?.url}
                alt="author"
              />
              <div className="author-detail">
                <h4>{author?.node?.name}</h4>
              </div>
            </div>
            <div
              className="post-section__content my-5"
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </div>
        </section>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpPost(slug: { eq: $slug }) {
      title
      content
      featuredImage {
        node {
          srcSet
        }
      }
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
    }
  }
`

export default PostTemplate
