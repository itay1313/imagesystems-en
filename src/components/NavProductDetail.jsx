import React from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const NavProductDetail = ({ products }) => {
  return (
    <Tabs className="prod__detail-tab">
      {products.map((item, idx) => (
        <TabPanel key={idx}>
          <div
            className="product-content"
            dangerouslySetInnerHTML={{ __html: item?.excerpt }}
          />
        </TabPanel>
      ))}
      <TabList>
        {products.map((item, idx) => (
          <Tab key={idx}>
            <Link to={item.uri}>
              <img
                className="product-img"
                loading="lazy"
                src={item.featuredImage?.node.sourceUrl}
                alt="product"
              />
              <p className="product-name">{item.title}</p>
            </Link>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

export default NavProductDetail
