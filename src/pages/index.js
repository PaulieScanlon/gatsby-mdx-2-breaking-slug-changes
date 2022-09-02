import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Page = () => {
  const {
    allMdx: { nodes }
  } = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          slug
          frontmatter {
            title
          }
        }
      }
    }
  `);

  return (
    <main>
      <h1>Index</h1>
      <ul>
        {nodes.map((node, index) => {
          const {
            slug,
            frontmatter: { title }
          } = node;
          return (
            <li key={index}>
              <Link to={`/${slug}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default Page;
