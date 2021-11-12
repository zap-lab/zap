import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/variables';

const Container = styled.div({
  display: 'inline-block',
  margin: '0 auto',
  overflow: 'hidden',
});

const SearchInput = styled.input({
  display: 'inline-block',
  width: 740,
  height: 42,
  borderRadius: 5,
  backgroundColor: 'rgba(0, 0, 0, .1)',
  color: colors.light.fg.primary,
  padding: '0 1em',
  lineHeight: 42,
  boxSizing: 'border-box',
})

const SearchBar: React.FC = () => (
  <Container>
    <SearchInput />
  </Container>
);

export default SearchBar;
