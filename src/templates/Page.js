import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"

const PageTemplate = ({ data }) => {
  const { title, content } = data.wpPage
  return (
    <Layout>
      <div className="post-section">
        <section>
          <div className="container my-5 py-5">
            <h1>{title}</h1>
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
    wpPage(slug: { eq: $slug }) {
      title
      content
    }
  }
`

export default PageTemplate