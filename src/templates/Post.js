import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PostTemplate = ({ data }) => {
  const { title, content } = data
  return (
    <Layout>
      <h1>{title}</h1>
      <div
        className="hero-content"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
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