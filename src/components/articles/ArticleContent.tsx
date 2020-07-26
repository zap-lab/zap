import React from 'react';
import Title from 'components/articles//Title';
import Description from 'components/articles/Description';

interface Props {
  title: string;
  description: string;
}

const ArticleContent: React.FC<Props> = ({ title, description }) => (
  <>
    <Title title={title} />
    <Description description={description} />
  </>
);

export default ArticleContent;
