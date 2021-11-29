import React from "react"

export const ProductItem = ({ data }) => {
  return (
    <div className="col-sm-4 product-item">
      <div className="product-item__img">
        <img src={data.img || ""} alt="banner" />
        <h3>{data.title}</h3>
      </div>
      <p>{data.description}</p>
    </div>
  )
}
