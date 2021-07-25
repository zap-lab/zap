import React from 'react';
import styled from '@emotion/styled';
import { dimensions } from 'styles/variables';

interface TitleProps {
  children: string;
}

const Container = styled.h3({
  display: 'inline',
  fontSize: `${dimensions.headingSizes.h3}rem`,
});

const ArticleTitle: React.FC<TitleProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ArticleTitle;
