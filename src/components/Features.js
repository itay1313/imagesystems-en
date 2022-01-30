import React from "react"

const FeaturesItem = ({ data }) => {
  return (
    <div className="news-item">
      {data.img?.srcSet && <img srcSet={data.img?.srcSet} alt="news" />}
      <div className="news-item__content">
        <h3 className="mb-0">{data.title}</h3>
        <div
          className="news-item__desc"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
        <a href={data.buttonLink}>{data.buttonName}</a>
      </div>
    </div>
  )
}

export default FeaturesItem
