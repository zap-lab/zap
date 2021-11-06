import React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions } from 'styles/variables';

interface Props {
  children?: React.ReactNode;
}

const Container = styled.div({
  fontSize: '1rem',
  color: colors.light.fg.secondary,
  lineHeight: dimensions.lineHeight.normal,
  maxHeight: 200,
  textOverflow: 'ellipsis',
  overflow: 'hidden',
  wordBreak: 'break-all',
});

const ArticleDescription: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);

export default ArticleDescription;
