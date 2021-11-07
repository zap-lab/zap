import React from 'react';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';

import Page from 'components/Page';
import PostHeader from 'components/posts/PostHeader';
import PostContent from 'components/posts/PostContent';
import Container from 'components/Container';
import IndexLayout from 'layouts/IndexLayout';
import { colors, dimensions } from 'styles/variables';

interface PageTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
      };
    };
  };
}

const PostPage = styled(Page)({
  padding: `${dimensions.paddings.lg}px 0`,
  backgroundColor: colors.light.bg.primary,
});

const PageTemplate: React.FC<PageTemplateProps> = ({ data }) => (
  <IndexLayout>
    <PostPage>
      <Container>
        <PostHeader>{data.markdownRemark.frontmatter.title}</PostHeader>
        {/* eslint-disable-next-line react/no-danger */}
        <PostContent dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </PostPage>
  </IndexLayout>
);

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
      }
    }
  }
`;
