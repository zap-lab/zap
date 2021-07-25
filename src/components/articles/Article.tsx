import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { colors, dimensions } from 'styles/variables';
import Title from 'components/articles/Title';

const Container = styled.div({
  padding: dimensions.containerPadding,
  backgroundColor: colors.light.bg.primary,
  borderRadius: 10,
});

interface PostProps {
  post: GatsbyTypes.MarkdownRemark;
}

const Article: React.FC<PostProps> = ({ post }) =>
  post && post.frontmatter && post.fields ? (
    <Container>
      <Title>
        <Link to={post.fields.slug || ''}>
          {post?.frontmatter?.title}
          {`(${post?.frontmatter?.date})`}
        </Link>
      </Title>
    </Container>
  ) : (
    <></>
  );

export default Article;
