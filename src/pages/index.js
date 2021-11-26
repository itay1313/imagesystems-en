import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "react-slick"
import { logos } from "../utils/staticData"

const trust_settings = {
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false,
  responsive: [
    {
      breakpoint: 1440,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
}

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="hero-section">hero slide</section>
    {/* <section className="trust-section">
      <Slider {...trust_settings}>
        {logos.map((item, idx) => (
          <img src={item} key={idx} className="trust-img" alt="trust logos" />
        ))}
      </Slider>
    </section> */}
  </Layout>
)

export default IndexPage
