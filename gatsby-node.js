const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpProduct: { nodes: allProducs },
      allWpCategory: { nodes: allCategory },
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
      allWpCategory {
        nodes {
          slug
          uri
        }
      }
    }
  `)

  const productTemplate = path.resolve(`./src/templates/Product.js`)
  const categoryTemplate = path.resolve(`./src/templates/Category.js`)

  allProducs.forEach(product => {
    createPage({
      path: product.uri,
      component: productTemplate,
      context: {
        slug: product.slug,
      },
    })
  })

  allCategory.forEach(category => {
    createPage({
      path: category.uri,
      component: categoryTemplate,
      context: {
        slug: category.slug,
      },
    })
  })
}
