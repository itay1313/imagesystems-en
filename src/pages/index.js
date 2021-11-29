import React, { useRef } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Slider from "react-slick"
import { logos, heros, products, news } from "../utils/staticData"
import {
  Closequote,
  LeftArrow,
  LeftBtn,
  Mission,
  Openquote,
  RightArrow,
  RightBtn,
} from "../utils/imgImport"
import ProductItem from "../components/ProductItem"
import NewsItem from "../components/NewsItem"
import HeroSlide from "../components/HeroSlide"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === 0 ? true : false}
    type="button"
  >
    <img src={LeftArrow} alt="left arrow" />
  </button>
)

const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
  <button
    {...props}
    className={
      "slick-next slick-arrow" +
      (currentSlide === slideCount - 1 ? " slick-disabled" : "")
    }
    aria-hidden="true"
    aria-disabled={currentSlide === slideCount - 1 ? true : false}
    type="button"
  >
    <img src={RightArrow} alt="right arrow" />
  </button>
)

const IndexPage = ({ data }) => {
  const hero_settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const trust_settings = {
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  }
  const news_settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  const slider = useRef()
  const next = () => {
    slider.current.slickNext()
  }
  const previous = () => {
    slider.current.slickPrev()
  }

  const homepageData = data.allWpPost.nodes
  // console.log(homepageData)

  return (
    <Layout>
      <Seo title="Home" />
      <section className="hero-section">
        <div className="container">
          <Slider {...hero_settings}>
            {heros.map((item, idx) => (
              <HeroSlide data={item} key={idx} />
            ))}
          </Slider>
        </div>
      </section>
      <section className="container trust-section">
        <h2>Trusted by over 1000 companies in 140 countries</h2>
        <Slider {...trust_settings}>
          {logos.map((item, idx) => (
            <div className="trust-img" key={idx}>
              <img src={item} alt="trust logos" />
            </div>
          ))}
        </Slider>
      </section>
      <section className="container mission-section">
        <div className="row">
          <div className="col-sm-7">
            <img className="w-100" src={Mission} alt="mission" />
          </div>
          <div className="col-sm-5 mission-section__detail">
            <h2>Our mission is this</h2>
            <p className="my-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
              amet lectus eu lorem laoreet facilisis. Proin fringilla enim et
              dui sagittis ornare. Nam pellentesque efficitur gravida. Sed vel
              erat viverra, sollicitudin ligula at, volutpat libero. Sed semper
              egestas ante eget interdum. Nulla et enim sit amet magna dapibus
              ullamcorper. Fusce ut orci nisi. auris auctor vitae lacus vel
              congue.
            </p>
            <Link className="btn-link" to="/">
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section className="container products-section">
        <h2>Our Products</h2>
        <div className="row">
          {products.map((item, idx) => (
            <ProductItem key={idx} data={item} />
          ))}
          <div className="text-center mt-5">
            <button className="btn-primary">Learn more</button>
          </div>
        </div>
      </section>
      <section className="container news-section">
        <div className="container">
          <h2>Latest News</h2>
          {
            <Slider ref={c => (slider.current = c)} {...news_settings}>
              {news.map((item, index) => (
                <NewsItem data={item} key={index} />
              ))}
            </Slider>
          }
          <div className="arrow-btns">
            <button className="custom-arrow" onClick={previous}>
              <img src={LeftBtn} alt="left arrow" />
            </button>
            <button className="custom-arrow" onClick={next}>
              <img src={RightBtn} alt="right arrow" />
            </button>
          </div>
        </div>
      </section>
      <section className="testimonial-section">
        <div className="container h-100">
          <div className="row h-100">
            <div className="col-sm-6"></div>
            <div className="col-sm-6 testimonial-item">
              <blockquote>
                <div className="openquote">
                  <img src={Openquote} alt="openquote" />
                </div>
                <p>
                  The Software Is the Instrument <small>Andrea</small>
                </p>
                <div className="closequote">
                  <img src={Closequote} alt="closequote" />
                </div>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPost {
      nodes {
        title
        content
        categories {
          nodes {
            slug
          }
        }
      }
    }
  }
`
