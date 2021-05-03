const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require("path")

exports.onCreateNode = async ({ node, actions, getNode, store, cache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type !== null && node.internal.type === "StrapiProdutos") {
    for (const image of node.imagens_secondarias) {
      const fileNode = await createRemoteFileNode({
        url: "http://localhost:1337" + image.url,
        store,
        cache,
        createNode,
        createNodeId: (id) => image.id.toString(),
      });

      if (fileNode) {
        image.localFile___NODE = fileNode.id;
      }
    }
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // Create categoryPages
  const { data: { allStrapiCategorias: { categorias } } } = await graphql(`
  {
    allStrapiCategorias {
      categorias:nodes {
        nome
        produtos {
            titulo
        }
      }
    }   
  }
  `)
  categorias.forEach((categoria) => {
    createPage({
      path: '/categorias/' + categoria.nome,
      component: path.resolve("./src/templates/CategoryPage.jsx"),
      context: {
        slug: categoria.nome
      },
    })
  })
  const { data: { allStrapiProdutos: { produtos } } } = await graphql(`
    {
      allStrapiProdutos {
        produtos:nodes {
          slug
        }
      }
    }  
  `)
  produtos.forEach((produto) => {
    createPage({
      path: '/produtos/' + produto.slug,
      component: path.resolve("./src/templates/ProductPage.jsx"),
      context: {
        slug: produto.slug
      },
    })
  })

};