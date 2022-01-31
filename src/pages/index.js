import React, { useRef } from "react"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import Seo from "../components/seo"
import Slider from "react-slick"
import { LeftArrow, LeftBtn, RightArrow, RightBtn } from "../utils/imgImport"
import ProductTemplate from "../components/Products"
import NewsTemplate from "../components/News"
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
    <img src={LeftArrow} loading="lazy" alt="left arrow" />
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
    <img src={RightArrow} loading="lazy" alt="right arrow" />
  </button>
)

const NewsArrowLeft = ({ ...props }) => (
  <button
    {...props}
    className="custom-arrow left"
    aria-hidden="true"
    type="button"
  >
    <img src={LeftBtn} loading="lazy" alt="left arrow" />
  </button>
)

const NewsArrowRight = ({ ...props }) => (
  <button
    {...props}
    className="custom-arrow right"
    aria-hidden="true"
    type="button"
  >
    <img src={RightBtn} loading="lazy" alt="right arrow" />
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
    dots: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    appendDots: dots => <ul>{dots}</ul>,
    customPaging: () => <div className="ft-slick__dots--custom"></div>,
    prevArrow: <NewsArrowLeft />,
    nextArrow: <NewsArrowRight />,
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

      <section className="products-section">
        <div className="container">
          <h2>Our Products</h2>
          {
            <Slider ref={c => (slider.current = c)} {...news_settings}>
              {products.map((item, idx) => (
                <ProductTemplate key={idx} data={item} />
              ))}
            </Slider>
          }
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <h2>Trusted by over 1000 companies in 140 countries</h2>
          <Slider {...logo_settings}>
            {logoSlides.map((item, idx) => (
              <div className="trust-img" key={idx}>
                <img
                  src={item.logo.localFile.url}
                  loading="lazy"
                  alt="trust logos"
                />
              </div>
            ))}
          </Slider>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mb-4">
              <img
                loading="lazy"
                className="w-100"
                src={homeQuery?.missionImage.localFile.url}
                alt="mission"
              />
            </div>
            <div className="col-lg-5 mission-section__detail">
              <h2 className="mb-0">{homeQuery?.missionTitle}</h2>
              <div
                className="my-5"
                dangerouslySetInnerHTML={{ __html: homeQuery?.missionText }}
              />
              <Link className="btn-link" to={homeQuery?.missionUrl}>
                Learn more
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="container">
          <h2>Latest News</h2>
          {
            <Slider ref={c => (slider.current = c)} {...news_settings}>
              {posts.map((item, index) => (
                <NewsTemplate data={item} key={index} />
              ))}
            </Slider>
          }
        </div>
      </section>

      <section className="testimonial-section">
        <div className="container">
          <h2>Testimonials</h2>
          <div className="row justify-content-center mx-0 mx-md-5">
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
            avatar {
              localFile {
                url
              }
            }
          }
        }
      }
    }
    allWpProduct(limit: 6, sort: { fields: date, order: DESC }) {
      nodes {
        title
        excerpt
        featuredImage {
          node {
            sourceUrl
          }
        }
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
