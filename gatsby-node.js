const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const {
    data: {
      allWpProduct: { nodes: allProducs },
      allWpCategory: { nodes: allCategory },
      allWpPost: { nodes: allPosts },
      allWpPage: { nodes: allPages },
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
      allWpCategory(
        filter: { slug: { in: ["dic", "scanner", "tema", "trackeye"] } }
      ) {
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
      allWpPage(filter: { slug: { ne: "homepage" } }) {
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
  const pageTemplate = path.resolve(`./src/templates/Page.js`)

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

  allPages.forEach(post => {
    createPage({
      path: `/pages/${post.slug}`,
      component: pageTemplate,
      context: {
        slug: post.slug,
      },
    })
  })
}
