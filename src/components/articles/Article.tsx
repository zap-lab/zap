import React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions } from 'styles/variables';
import ArticleHeader from 'components/articles/ArticleHeader';
import ArticleDescription from 'components/articles/ArticleDescription';
import ArticleImage from 'components/articles/ArticleImage';
import ArticleContent from 'components/articles/ArticleContent';

const Container = styled.div({
  display: 'flex',
  flexDirection: 'row',
  padding: dimensions.paddings.md,
  backgroundColor: colors.light.bg.primary,
  borderRadius: 10,
  '& + &': {
    marginTop: dimensions.paddings.sm,
  },
});

interface PostProps {
  post: GatsbyTypes.MarkdownRemark;
}

const Article: React.FC<PostProps> = ({ post }) =>
  post && post.frontmatter && post.fields ? (
    <Container>
      {post.frontmatter.image?.src ? (
        <ArticleImage
          file={post.frontmatter.image.src}
          alt={post.frontmatter.image.alt}
        />
      ) : null}
      <ArticleContent>
        <ArticleHeader
          title={post.frontmatter.title || ''}
          date={post.frontmatter.date || ''}
          slug={post.fields.slug || ''}
        />
        <ArticleDescription>{post.excerpt}</ArticleDescription>
      </ArticleContent>
    </Container>
  ) : (
    <></>
  );

export default Article;
