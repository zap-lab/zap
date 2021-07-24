import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

const Container = styled.div();

interface PostProps {
  post: GatsbyTypes.MarkdownRemark;
}

const Post: React.FC<PostProps> = ({ post }) =>
  post && post.frontmatter ? (
    <Container>
      <Link to={post.frontmatter.slug || ''}>
        {post?.frontmatter?.title}
        {`(${post?.frontmatter?.date})`}
      </Link>
    </Container>
  ) : (
    <></>
  );

export default Post;
