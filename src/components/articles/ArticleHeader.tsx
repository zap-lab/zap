import React from 'react';
import styled from '@emotion/styled';
import { colors, dimensions } from 'styles/variables';
import ArticleTitle from 'components/articles/ArticleTitle';
import ArticleDate from 'components/articles/ArticleDate';
import { Link } from 'gatsby';

interface ArticleHeaderProps {
  title: string;
  date: string;
  slug: string;
}

const Container = styled.p({
  a: {
    color: colors.light.fg.primary,
  },
  '& + *': {
    marginTop: dimensions.margins.sm,
  },
});

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, date, slug }) => (
  <Container>
    <Link to={slug}>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleDate>{date}</ArticleDate>
    </Link>
  </Container>
);

export default ArticleHeader;
