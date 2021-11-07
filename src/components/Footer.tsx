import React from 'react';
import styled from '@emotion/styled';
import { transparentize } from 'polished';
import { Link } from 'gatsby';

import { colors, heights, widths } from 'styles/variables';
import Container from 'components/Container';
import powered_by_vercel from 'images/sponsors/powered_by_vercel.svg';
import getEmSize from 'styles/getEmSize';

const StyledFooter = styled.footer({
  height: `${heights.footer}px`,
  backgroundColor: colors.light.footer.bg,
  color: transparentize(0.5, colors.white),
});

const FooterInner = styled(Container)({
  display: 'flex',
  maxWidth: `${getEmSize(widths.xl)}em`,
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
});

const VercelBanner = styled.img({
  height: 34,
});

// Footer is used temporary to display the sponsors.
// This part will be replaced to official project page.
const Footer: React.FC = () => (
  <StyledFooter>
    <FooterInner>
      <Link to="https://vercel.com/">
        <VercelBanner src={powered_by_vercel} alt="Powered by Vercel" />
      </Link>
    </FooterInner>
  </StyledFooter>
);

export default Footer;
