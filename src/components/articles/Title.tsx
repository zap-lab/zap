import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/variables';

interface Props {
  children?: React.ReactNode;
}

const Container = styled.h3({
  fontSize: '1.375rem',
  marginTop: 0,
  a: {
    color: colors.light.fg.primary,
  },
});

const Title: React.FC<Props> = ({ children }) => (
  <Container>{children}</Container>
);

export default Title;
