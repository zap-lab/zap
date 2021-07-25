import React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions } from 'styles/variables';
import ArticleHeader from 'components/articles/ArticleHeader';
import ArticleDescription from 'components/articles/ArticleDescription';

const Container = styled.div({
  padding: dimensions.paddings.md,
  backgroundColor: colors.light.bg.primary,
  borderRadius: 10,
});

interface PostProps {
  post: GatsbyTypes.MarkdownRemark;
}

const Article: React.FC<PostProps> = ({ post }) =>
  post && post.frontmatter && post.fields ? (
    <Container>
      <ArticleHeader
        title={post.frontmatter.title || ''}
        date={post.frontmatter.date || ''}
        slug={post.fields.slug || ''}
      />
      <ArticleDescription>{post.excerpt}</ArticleDescription>
    </Container>
  ) : (
    <></>
  );

export default Article;
