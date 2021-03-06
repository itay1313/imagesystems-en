import React from "react"
import { Link } from "gatsby"

const HeroSlide = ({ data }) => {
  let backgroundExtension = data.background.localFile.url;
  let isVideoBackground = backgroundExtension.endsWith(".mp4");
  return (
    <div className="position-relative hero-slides">
      {isVideoBackground ? (
        <video
          style={{ objectFit: "cover" }}
          className="video-player"
          height="100%"
          width="100%"
          loop
          muted
          autoPlay
        >
          <source src={data.background.localFile.url} type="video/mp4" />
        </video>
      ) :
        <img
          src={data.background.localFile.url}
          loading="lazy"
          alt="hero slide"
          className="hero-img"
        />
      }
      <div className="hero-slide">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <h1 className="hero-title mb-0">{data.title}</h1>
              <p className="hero-content">{data.content}</p>
              <div className="hero-btn">
                <Link className="btn-primary" to={`/${data.buttonLink}`}>
                  {data.buttonName}
                </Link>
              </div>
            </div>
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              {/* <button className="btn-play">{""}</button> */}
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default HeroSlide
