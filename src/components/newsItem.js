import React from "react"

export const NewsItem = ({ img, title, description, author }) => {
  return (
    <div className="news-item">
      <div className="news-item_img">
        <img src={img} alt="news image" />
      </div>
      <h2>{title}</h2>
      <div className="divider"></div>
      <p>{description}</p>
      <div className="news-item_author">
        <div className="author-photo">
          <img src={author.photo} />
        </div>
        <div className="author-detail">
          <h4>{author.name}</h4>
          <p>{author.position}</p>
        </div>
      </div>
    </div>
  )
}
