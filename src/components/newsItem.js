import React from "react"

const NewsItem = ({ data }) => {
  return (
    <div className="news-item">
      <img src={data.img} alt="news" />
      <div className="news-item__content">
        <h3>{data.title}</h3>
        <div className="divider"></div>
        <p className="news-description">{data.description}</p>
        <div className="news-item__author">
          <img className="author-photo" src={data.author.avatar} alt="author" />
          <div className="author-detail">
            <h4>{data.author.name}</h4>
            <p>{data.author.role}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsItem