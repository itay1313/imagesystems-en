const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpProduct: { nodes: allProducs },
    },
  } = await graphql(`
    query {
      allWpProduct {
        nodes {
          title
          uri
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `)

  const productTemplate = path.resolve(`./src/pages/product.js`)

  allProducs.forEach(product => {
    createPage({
      path: product.uri,
      component: productTemplate,
      context: {
        product: product,
      },
    })
  })
}
