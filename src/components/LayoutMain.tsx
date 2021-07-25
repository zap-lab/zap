import React from 'react';
import styled from '@emotion/styled';
import { colors } from 'styles/variables';

const StyledLayoutMain = styled.main({
  display: 'flex',
  backgroundColor: colors.light.bg.secondary,
  flexDirection: 'column',
  flex: 1,
});

interface LayoutMainProps {
  className?: string;
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>{children}</StyledLayoutMain>
);

export default LayoutMain;
