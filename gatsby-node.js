const path = require('path');

exports.createPages = async ({ graphql, actions: { createPage, createRedirect } }) => {
  const {
    data: { allMdx }
  } = await graphql(`
    query {
      allMdx {
        nodes {
          id
          slug
        }
      }
    }
  `);

  allMdx.nodes.forEach((node) => {
    const { id, slug } = node;

    createPage({
      path: slug,
      component: path.join(__dirname, './src/templates/post.js'),
      context: {
        id: id
      }
    });
  });
};
