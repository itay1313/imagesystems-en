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
          slug
        }
      }
    }
  `)

  const productTemplate = path.resolve(`./src/templates/Page.js`)

  allProducs.forEach(product => {
    createPage({
      path: product.uri,
      component: productTemplate,
      context: {
        slug: product.slug,
      },
    })
  })
}
