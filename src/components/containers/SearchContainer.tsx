import React, { ReactNode } from 'react';
import styled from '@emotion/styled';

import { widths } from 'styles/variables';
import getEmSize from 'styles/getEmSize';

const StyledContainer = styled.div({
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'auto',
  maxWidth: `${getEmSize(widths.md)}em`,
});

interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

const SearchContainer: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default SearchContainer;
