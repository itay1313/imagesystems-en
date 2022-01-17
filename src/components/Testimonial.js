import React from "react"
import { Closequote } from "../utils/imgImport"
import StarRatings from "react-star-ratings"

const TestimonialItem = ({ data }) => {
  return (
    <div className="testimonial-item">
        <div className="testimonial-item__avatar">
          <img
            src={data.avatar.localFile.url}
            alt="avatar"
          />
        </div>
        <div classNmae="testimonial-item-detail">
            <div><img src={Closequote} alt="closequote" /></div>
            <div
              className="testimonial-item-detail__text"
              dangerouslySetInnerHTML={{ __html: data.testimonialText }}
            />
            <span className="testimonial-item-detail__name">{data.testimonialTitle}</span>
            <span className="testimonial-item-detail__role">{data.testimonialSubtitle}</span>
            
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
