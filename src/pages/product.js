import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ProductPage = ({ pageContext }) => {
  const { product } = pageContext
  console.log(product)
  return (
    <Layout>
      <Seo title="Product Page" />
      <div className="container">
        <div className="product-page">
          <h1 className="product-title">{product?.title}</h1>
          <img
            src={product?.featuredImage.node.sourceUrl}
            loading="lazy"
            alt="product"
            className="product-img"
          />
          <div
            className="product-content"
            dangerouslySetInnerHTML={{ __html: product?.excerpt }}
          />
        </div>
      </div>
    </Layout>
  )
}

export default ProductPage
