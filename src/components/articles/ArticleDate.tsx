import React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions } from 'styles/variables';

interface DateProps {
  children: string;
}

const Container = styled.span({
  color: colors.light.fg.secondary,
  fontSize: dimensions.fontSize.sm,
  marginLeft: '1rem',
});

const ArticleDate: React.FC<DateProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default ArticleDate;
