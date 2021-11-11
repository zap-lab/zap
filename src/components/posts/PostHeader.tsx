import React from 'react';
import styled from '@emotion/styled';
import { dimensions } from 'styles/variables';

interface ArticleHeaderProps {
  children: string;
}

const Container = styled.h1({
  marginBottom: dimensions.margins.lg,
});

const PostHeader: React.FC<ArticleHeaderProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default PostHeader;
