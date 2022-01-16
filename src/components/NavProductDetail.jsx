import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const NavProductDetail = ({ products }) => {
  console.log(products)

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
            <img
              className="product-img"
              src={item.featuredImage.node.sourceUrl}
              alt="product"
            />
            <p className="product-name">{item.title}</p>
          </Tab>
        ))}
      </TabList>
    </Tabs>
  )
}

export default NavProductDetail
