import React from "react";
import styled from "@emotion/styled";

interface Props {
  title: string;
}

const Container = styled.h3({
  fontSize: "1.375rem",
  color: "#555555"
});

const Title: React.FC<Props> = ({ title }) => <Container>{title}</Container>;

export default Title;
