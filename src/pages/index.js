import React, { useRef } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Slider from "react-slick"
import { LeftArrow, LeftBtn, RightArrow, RightBtn } from "../utils/imgImport"
import ProductItem from "../components/ProductItem"
import NewsItem from "../components/News"
import HeroSlide from "../components/HeroSlide"
import TestimonialItem from "../components/Testimonial"

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
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  const logo_settings = {
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
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
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
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

  const homeQuery = data?.allWpPage.nodes[0].homepageQuery
  const heroSlides = homeQuery.heroSlider
  const logoSlides = homeQuery.logos
  const testimonials = homeQuery.testimonial
  const products = data?.allWpProduct.nodes
  const posts = data?.allWpPost.nodes

  return (
    <Layout>
      <Seo title="Home" />
      <section className="hero-section">
        <Slider {...hero_settings}>
          {heroSlides.map((item, idx) => (
            <HeroSlide data={item} key={idx} />
          ))}
        </Slider>
      </section>
      <section className="container trust-section">
        <h2>Trusted by over 1000 companies in 140 countries</h2>
        <Slider {...logo_settings}>
          {logoSlides.map((item, idx) => (
            <div className="trust-img" key={idx}>
              <img src={item.logo.localFile.url} alt="trust logos" />
            </div>
          ))}
        </Slider>
      </section>
      <section className="container mission-section">
        <div className="row">
          <div className="col-lg-7 mb-4">
            <img
              className="w-100"
              src={homeQuery?.missionImage.localFile.url}
              alt="mission"
            />
          </div>
          <div className="col-lg-5 mission-section__detail">
            <h2>{homeQuery?.missionTitle}</h2>
            <div
              className="my-5"
              dangerouslySetInnerHTML={{ __html: homeQuery?.missionText }}
            />
            <Link className="btn-link" to={homeQuery?.missionUrl}>
              Learn more
            </Link>
          </div>
        </div>
      </section>
      <section className="products-section">
        <div className="container">
          <h2>Our Products</h2>
          <div className="row justify-content-center">
            {products.map((item, idx) => (
              <ProductItem key={idx} data={item} />
            ))}
            <div className="text-center mt-5">
              <button className="btn-primary">Learn more</button>
            </div>
          </div>
        </div>
      </section>
      <section className="container news-section">
        <div className="container">
          <h2>Latest News</h2>
          {
            <Slider ref={c => (slider.current = c)} {...news_settings}>
              {posts.map((item, index) => (
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
        <div className="container">
          <h2>Testimonials</h2>
          <div className="row justify-content-center">
            {testimonials.map((item, idx) => (
              <TestimonialItem key={idx} data={item} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allWpPage(filter: { slug: { eq: "homepage" } }) {
      nodes {
        homepageQuery {
          heroSlider {
            title
            content
            buttonName
            buttonLink
            fieldGroupName
            background {
              localFile {
                url
              }
            }
          }
          companiesTitle
          logos {
            logo {
              localFile {
                url
              }
            }
          }
          missionTitle
          missionText
          missionUrl
          missionImage {
            localFile {
              url
            }
          }
          testimonial {
            testimonialTitle
            testimonialText
            testimonialSubtitle
            stars
            avatar {
              localFile {
                url
              }
            }
          }
        }
      }
    }
    allWpProduct(limit: 3, sort: { fields: date, order: DESC }) {
      nodes {
        title
        content
        uri
      }
    }
    allWpPost {
      nodes {
        title
        content
        featuredImage {
          node {
            srcSet
          }
        }
        author {
          node {
            avatar {
              url
            }
            name
          }
        }
      }
    }
  }
`
