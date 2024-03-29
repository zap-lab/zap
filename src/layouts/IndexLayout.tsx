import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import 'modern-normalize';
import 'styles/normalize';

import Header from 'components/Header';
import Footer from 'components/Footer';
import LayoutRoot from 'components/LayoutRoot';
import LayoutMain from 'components/LayoutMain';

const IndexLayout: React.FC = ({ children }) => (
  <StaticQuery<GatsbyTypes.IndexLayoutQueryQuery>
    query={graphql`
      query IndexLayoutQuery {
        site {
          siteMetadata {
            title
            description
            keywords
          }
        }
      }
    `}
    render={(data) => (
      <LayoutRoot>
        <Helmet
          title={data.site?.siteMetadata?.title}
          meta={[
            {
              name: 'description',
              content: data.site?.siteMetadata?.description,
            },
            { name: 'keywords', content: data.site?.siteMetadata?.keywords },
          ]}
        />
        <Header />
        <LayoutMain>{children}</LayoutMain>
        <Footer />
      </LayoutRoot>
    )}
  />
);

export default IndexLayout;
