const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // query content for WordPress posts
  const {
    data: {
      allWpProduct: { nodes: allProducs },
      allWpCategory: { nodes: allCategory },
      allWpPost: { nodes: allPosts },
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
      allWpPost {
        nodes {
          title
          content
          slug
          uri
          featuredImage {
            node {
              srcSet
            }
          }
        }
      }
    }
  `)

  const productTemplate = path.resolve(`./src/templates/Product.js`)
  const categoryTemplate = path.resolve(`./src/templates/Category.js`)
  const postTemplate = path.resolve(`./src/templates/Post.js`)

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

  allPosts.forEach(post => {
    createPage({
      path: `/news${post.uri}`,
      component: postTemplate,
      context: {
        slug: post.slug,
      },
    })
  })
}
