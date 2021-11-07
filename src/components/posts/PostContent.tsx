import React from 'react';
import styled from '@emotion/styled';
import { dimensions } from 'styles/variables';

interface ArticleHeaderProps {
    dangerouslySetInnerHTML: {
        __html: string;
    } | undefined;
}

const Container = styled.div({
  margin: 0,
  padding: 0,
  lineHeight: dimensions.post.lineHeight.normal,
  '& > p, & > img, & > div, & > figure, & > blockquote, & > ul, & > ol, & > h1, & > h2, & > h3, & > h4, & > h5, & > h6': {
      marginBottom: dimensions.margins.md,
  }
});

const PostContent: React.FC<ArticleHeaderProps> = ({ dangerouslySetInnerHTML }) => (
  <Container dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
);

export default PostContent;
