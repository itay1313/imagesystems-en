import React from "react"

const Card = ({ data }) => {
  return (
    <div className="card-item">
      {data.img?.srcSet && <img srcSet={data.img?.srcSet} alt="card" />}
      <div className="card-item__content">
        <h3 className="mb-0">{data.title}</h3>
        <p>{data.content}</p>
        <a href={data.buttonLink}>{data.buttonName}</a>
      </div>
    </div>
  )
}

export default Card
