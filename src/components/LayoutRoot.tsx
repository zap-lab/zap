import React from 'react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';

import normalize from 'styles/normalize';

const StyledLayoutRoot = styled.div({
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
});

interface LayoutRootProps {
  className?: string;
}

const LayoutRoot: React.FC<LayoutRootProps> = ({ children, className }) => (
  <>
    <Global styles={() => css(normalize)} />
    <StyledLayoutRoot className={className}>{children}</StyledLayoutRoot>
  </>
);

export default LayoutRoot;
