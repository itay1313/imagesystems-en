
import { Link } from "gatsby"
import React from "react"

const ProductItem = ({ data }) => {
  return (
    <div className="product-item">
      <img
        loading="lazy"
        src={data.featuredImage.node.sourceUrl}
        alt="product"
        className="product-item__img"
      />
      <h3 className="product-item__title mb-0">{data.title}</h3>
      <div
        className="product-item__content"
        dangerouslySetInnerHTML={{ __html: data.excerpt }}
      />
      <Link to={data.uri}>
        <div className="product-item__link">Learn more</div>
      </Link>
    </div>
  )
}

export default ProductItem