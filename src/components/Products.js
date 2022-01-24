import { Link } from "gatsby"
import React from "react"

const ProductItem = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6">
      <div className="product-item">
        <Link to={data.uri}>
          <img
            src={data.featuredImage.node.sourceUrl}
            alt="product"
            className="product-item__img"
          />
          <h3 className="product-item__title">{data.title}</h3>
          <div
            className="product-item__contnet"
            dangerouslySetInnerHTML={{ __html: data.excerpt }}
          />
        </Link>
      </div>
    </div>
  )
}

export default ProductItem
