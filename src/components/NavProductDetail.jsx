import React, { useState } from "react"
import { Link } from "gatsby"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

const CustomTab = props => {
  return (
    <Tab>
      <Link to={props.uri} onMouseEnter={props.onHover}>
        <img
          className="product-img"
          loading="lazy"
          src={props.featuredImage?.node.sourceUrl}
          alt="product"
        />
        <p className="product-name">{props.title}</p>
      </Link>
    </Tab>
  )
}

CustomTab.tabsRole = "Tab"

const NavProductDetail = ({ products }) => {
  const [tabIndex, setTabIndex] = useState(0)

  return (
    <Tabs
      className="prod__detail-tab"
      selectedIndex={tabIndex}
      onSelect={index => setTabIndex(index)}
    >
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
          <CustomTab key={idx} onHover={() => setTabIndex(idx)} {...item} />
        ))}
      </TabList>
    </Tabs>
  )
}

export default NavProductDetail
