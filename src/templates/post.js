import React from 'react';
import { graphql, Link } from 'gatsby';

import { MDXProvider } from '@mdx-js/react';

const Page = ({
  data: {
    mdx: {
      frontmatter: { title }
    }
  },
  children
}) => {
  return (
    <main>
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <MDXProvider>{children}</MDXProvider>
    </main>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`;

export default Page;
