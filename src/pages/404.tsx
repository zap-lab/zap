import React from 'react';
import { Link } from 'gatsby';

import Page from 'components/Page';
import Container from 'components/Container';
import IndexLayout from 'layouts/IndexLayout';

const NotFoundPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>404: Page not found.</h1>
        <p>
          You&apos;ve hit the void.
          <Link to="/">Go back.</Link>
        </p>
      </Container>
    </Page>
  </IndexLayout>
);

export default NotFoundPage;
