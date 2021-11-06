import React from 'react';
import styled from '@emotion/styled';
import Img, { FluidObject } from 'gatsby-image';
import { colors, dimensions } from 'styles/variables';

interface ArticleImageProps {
  file: GatsbyTypes.File;
  alt?: string;
}

interface PureImageStyledProps {
  url?: string;
}

const Image = styled.img({
  flex: '0 0 160px',
  width: 160,
  height: 100,
  marginRight: dimensions.margins.sm,
  borderWidth: 1,
  borderStyle: 'solid',
  borderColor: colors.light.borders.normal,
  borderRadius: 5,
});
const PureImage = styled(Image.withComponent('div'))<PureImageStyledProps>(
  ({ url }) => ({
    backgroundImage: `url('${url}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  })
);
const FluidImage = Image.withComponent(Img);

const ArticleImage: React.FC<ArticleImageProps> = ({ file, alt }) => {
  return file.childImageSharp ? (
    <FluidImage
      fluid={file.childImageSharp.fluid as FluidObject}
      imgStyle={{
        objectFit: 'cover',
        objectPosition: '50% 50%',
      }}
      alt={alt}
    />
  ) : (
    <PureImage url={file.publicURL}>{alt}</PureImage>
  );
};

export default ArticleImage;
