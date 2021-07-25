import React from 'react';

import Page from 'components/Page';
import Container from 'components/Container';
import IndexLayout from 'layouts';
import Post from 'components/posts/Post';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              slug
              title
            }
          }
        }
      }
    }
  `);
  const Posts = data.allMarkdownRemark.edges.map(({ node }) => (
    <Post key={node.id} post={node} />
  ));
  return (
    <IndexLayout>
      <Page>
        <Container>{Posts}</Container>
      </Page>
    </IndexLayout>
  );
};

export default IndexPage;
