import React from "react";

import Page from "components/Page";
import Container from "components/Container";
import IndexLayout from "layouts";

const IndexPage: React.FC = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
