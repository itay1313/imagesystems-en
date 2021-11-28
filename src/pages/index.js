import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Slider from "react-slick"
import { logos } from "../utils/staticData"
import {
  Avatar,
  Mission,
  News1,
  News2,
  News3,
  Product1,
  Product2,
  Product3,
} from "../utils/imgImport"
import { ProductItem } from "../components/productItem"
import { NewsItem } from "../components/newsItem"

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
    <section className="section trust-section">
      <h2>Trusted by over 1000 companies in 140 countries</h2>
      <div className="trust-slider-container">
        <Slider {...trust_settings}>
          {logos.map((item, idx) => (
            <div className="trust-img">
              <img src={item} key={idx} alt="trust logos" />
            </div>
          ))}
        </Slider>
      </div>
    </section>
    <section className="section mission-section">
      <img src={Mission} alt="mission image" />
      <div className="mission-section_detail">
        <h2>Our mission is this</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
          amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui
          sagittis ornare. Nam pellentesque efficitur gravida. Sed vel erat
          viverra, sollicitudin ligula at, volutpat libero. Sed semper egestas
          ante eget interdum. Nulla et enim sit amet magna dapibus ullamcorper.
          Fusce ut orci nisi. auris auctor vitae lacus vel congue.
        </p>
        <a href="#">Learn more</a>
      </div>
    </section>
    <section className="section products-section">
      <h2>Our Products</h2>
      <div className="products">
        <ProductItem
          bannerImg={Product1}
          title="Trackeye"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui sagittis ornare. Nam pellentesque efficitur gra"
        />
        <ProductItem
          bannerImg={Product2}
          title="Trackeye"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui sagittis ornare. Nam pellentesque efficitur gra"
        />
        <ProductItem
          title="Trackeye"
          bannerImg={Product3}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui sagittis ornare. Nam pellentesque efficitur gra"
        />
      </div>

      <div className="actions">
        <button className="btn btn-md btn-primary">Learn more</button>
      </div>
    </section>
    <section className="section news-section">
      <h2>Latest News</h2>
      <div className="news">
        <NewsItem
          img={News1}
          title="The Software Is the Instrument"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui sagittis ornare. Nam pellentesque"
          author={{
            photo: Avatar,
            name: "Carrie Fisher",
            position: "Chief Marketing Officer",
          }}
        />
        <NewsItem
          img={News2}
          title="The Software Is the Instrument"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui sagittis ornare. Nam pellentesque"
          author={{
            photo: Avatar,
            name: "Carrie Fisher",
            position: "Chief Marketing Officer",
          }}
        />
        <NewsItem
          img={News3}
          title="The Software Is the Instrument"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet lectus eu lorem laoreet facilisis. Proin fringilla enim et dui sagittis ornare. Nam pellentesque"
          author={{
            photo: Avatar,
            name: "Carrie Fisher",
            position: "Chief Marketing Officer",
          }}
        />
      </div>
    </section>
  </Layout>
)

export default IndexPage
