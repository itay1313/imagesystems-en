import React from "react"

export const ProductItem = ({ children, title, description, bannerImg }) => {
  return (
    <div className="product-item">
      <div className="product-item_img">
        <img src={bannerImg || ""} alt="banner image" />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  )
}
