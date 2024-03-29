import React from 'react';

import Page from 'components/Page';
import Container from 'components/Container';
import IndexLayout from 'layouts/IndexLayout';
import Article from 'components/articles/Article';
import { graphql, useStaticQuery } from 'gatsby';

const IndexPage: React.FC = () => {
  const data = useStaticQuery<GatsbyTypes.Query>(graphql`
    query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
        edges {
          node {
            id
            excerpt(pruneLength: 120)
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              image {
                src {
                  publicURL
                  childImageSharp {
                    fluid(maxWidth: 320) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
                alt
              }
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `);
  const Posts = data.allMarkdownRemark.edges.map(({ node }) => (
    <Article key={node.id} post={node} />
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
