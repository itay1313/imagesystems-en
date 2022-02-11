import React from "react"
import { Closequote } from "../utils/imgImport"
import StarRatings from "react-star-ratings"

const TestimonialItem = ({ data }) => {
  return (
    <div className="testimonial-item">
      <div className="testimonial-item__avatar">
        <img src={data.avatar.localFile.url} loading="lazy" alt="avatar" />
      </div>
      <div className="testimonial-item-detail">
        <div>
          <img src={Closequote} loading="lazy" alt="closequote" />
        </div>
        <div
          className="testimonial-item-detail__text"
          dangerouslySetInnerHTML={{ __html: data.testimonialText }}
        />
        <div className="testimonial-item-detail__people">
          <span className="testimonial-item-detail__name">
            {data.testimonialTitle}
          </span>
          <span className="testimonial-item-detail__role">
            {data.testimonialSubtitle}
          </span>
        </div>

        {/* <StarRatings
              rating={data.stars}
              starDimension="30px"
              starSpacing="2.5px"
              starRatedColor=" #FFC107"
            /> */}
      </div>
    </div>
  )
}

export default TestimonialItem
