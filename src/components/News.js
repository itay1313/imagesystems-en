import React from "react"
import { Link } from "gatsby"

const NewsItem = ({ data }) => {
  return (
    <Link to={`/news/${data.slug}`}>
      <div className="news-item">
        {data.featuredImage?.node.srcSet && (
          <img srcSet={data.featuredImage?.node.srcSet} alt="news" />
        )}
        <div className="news-item__content">
          <h3 className="mb-0">{data.title}</h3>
          <div
            className="news-item__desc"
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
          <div className="news-item__author mt-1">
            <img
              loading="lazy"
              className="author-photo"
              src={data.author.node.avatar.url}
              alt="author"
            />
            <div className="author-detail">
              <h4>{data.author.node.name}</h4>
              {/* <p>{data.author.role}</p> */}
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsItem
