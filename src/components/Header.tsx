import React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Link } from 'gatsby';

import { colors, heights, widths } from 'styles/variables';
import Container from 'components/Container';
import IconSearch from 'components/icons/IconSearch';
import logo from 'images/logo.svg';
import getEmSize from 'styles/getEmSize';

const StyledHeader = styled.header({
  height: `${heights.header}px`,
  backgroundColor: colors.light.header.bg,
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

const SearchLink = styled(Link)({
  justifyContent: 'flex-end',
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
      <SearchLink to="/search">
        <IconSearch />
      </SearchLink>
    </HeaderInner>
  </StyledHeader>
);

export default Header;
