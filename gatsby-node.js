const { createRemoteFileNode } = require(`gatsby-source-filesystem`);
const path = require("path")

exports.onCreateNode = async ({ node, actions, getNode, store, cache }) => {
  const { createNode, createNodeField } = actions;

  if (node.internal.type !== null && node.internal.type === "strapiProdutos") {
    for (const image of node["imagens_secondarias"]) {
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
