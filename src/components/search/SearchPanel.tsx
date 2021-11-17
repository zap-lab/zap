import React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions } from 'styles/variables';

const Container = styled.div({
  borderBottomWidth: 2,
  borderBottomColor: colors.light.fg.primary,
});

const SearchInput = styled.input({
  height: 48,
  color: colors.light.fg.primary,
  fontSize: dimensions.headingSizes.h3,
  fontWeight: 600,
  padding: 4,
  lineHeight: 48,
  outline: 'none',
  boxSizing: 'border-box',
});

const SearchPanel: React.FC = () => (
  <Container>
    <SearchInput />
  </Container>
);

export default SearchPanel;
