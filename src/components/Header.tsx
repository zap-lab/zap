import React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { graphql, Link } from "gatsby";

import { heights, dimensions, colors, widths } from "styles/variables";
import Container from 'components/Container';
import logo from "images/logo.svg";
import getEmSize from "styles/getEmSize";

const StyledHeader = styled.header({
  height: `${heights.header}px`,
  padding: `0 ${dimensions.containerPadding}rem`,
  backgroundColor: colors.header.light,
  color: transparentize(0.5, colors.white),
});

const HeaderInner = styled(Container)({
  display: 'flex',
  maxWidth: `${getEmSize(widths.xl)}em`,
  flexDirection: 'row',
  alignItems: 'center',
  height: '100%',
});

const HomepageLink = styled(Link)({
  color: colors.white,
  fontSize: 0,
  fontWeight: 600,
  '&:hover, &:focus': {
    textDecoration: 'none',
  },
});

const Logo = styled.img({
  width: 45,
});

const Header: React.FC = () => (
  <StyledHeader>
    <HeaderInner>
      <HomepageLink to="/">
        <Logo src={logo} alt="Zap" />
      </HomepageLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
