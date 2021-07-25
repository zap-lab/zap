import React from 'react';
import styled from '@emotion/styled';

interface ArticleContentProps {
  children?: React.ReactNode;
}

const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
});

const ArticleContent: React.FC<ArticleContentProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ArticleContent;
