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
});

const PostContent: React.FC<ArticleHeaderProps> = ({ dangerouslySetInnerHTML }) => (
  <Container dangerouslySetInnerHTML={dangerouslySetInnerHTML} />
);

export default PostContent;
