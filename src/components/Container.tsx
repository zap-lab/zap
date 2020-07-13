import * as React from 'react';
import styled from '@emotion/styled';

import { widths } from 'styles/variables';
import { getEmSize } from 'styles/mixins';

const StyledContainer = styled.div({
  position: 'relative',
  marginLeft: 'auto',
  marginRight: 'auto',
  width: 'auto',
  maxWidth: `${getEmSize(widths.lg)}em`,
});

interface ContainerProps {
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
);

export default Container;
