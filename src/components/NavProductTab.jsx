import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"
import { useStaticQuery, graphql } from "gatsby"
import { ChevronRight } from "../utils/imgImport"
import NavProductDetail from "./NavProductDetail"

const prods = ["Tema", "Trackeye", "Dic", "Scanner"]

const NavProductTab = () => {
  const data = useStaticQuery(graphql`
    query NavQuery {
      allWpProduct {
        nodes {
          title
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
          uri
          categories {
            nodes {
              name
            }
          }
        }
      }
    }
  `)
  const allProducts = data?.allWpProduct.nodes
  const temas = allProducts.filter(
    item => item.categories.nodes[0].name === "Tema"
  )
  const trackeyes = allProducts.filter(
    item => item.categories.nodes[0].name === "Trackeye"
  )
  const dics = allProducts.filter(
    item => item.categories.nodes[0].name === "Dic"
  )
  const scanners = allProducts.filter(
    item => item.categories.nodes[0].name === "Scanner"
  )

  return (
    <div className="dropdown-content" role="presentation">
      <div className="container">
        <Tabs className="prod-tabs row">
          <TabList className="prod-tabs__list col-2 p-0">
            {prods.map((item, idx) => (
              <Tab key={idx}>
                {item}
                <img src={ChevronRight} loading="lazy" alt="chevron right" />
              </Tab>
            ))}
          </TabList>
          <div className="col-10 bg-white pt-4 ps-5">
            <TabPanel>
              <NavProductDetail products={temas} />
            </TabPanel>
            <TabPanel>
              <NavProductDetail products={trackeyes} />
            </TabPanel>
            <TabPanel>
              <NavProductDetail products={dics} />
            </TabPanel>
            <TabPanel>
              <NavProductDetail products={scanners} />
            </TabPanel>
          </div>
        </Tabs>
      </div>
    </div>
  )
}

export default NavProductTab
