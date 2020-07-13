import React from "react";
import styled from "@emotion/styled";

interface Props {
  description: string;
}

const Container = styled.div({
  fontSize: "1rem",
  color: "#777777",
  lineHeight: 1.175,
  maxHeight: 200,
  textOverflow: "ellipsis",
  overflow: "hidden",
  wordBreak: "break-all"
});

const Description: React.FC<Props> = ({ description }) => (
  <Container>{description}</Container>
);

export default Description;
