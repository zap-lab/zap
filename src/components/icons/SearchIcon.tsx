import React from 'react';
import styled from '@emotion/styled';

import { colors } from 'styles/variables';

const Container = styled.svg({
  width: 28,
  height: 28,
})

const Icon = styled.path({
  color: colors.light.fg.primary,
})

const IconSearch: React.FC = () => (
  <Container>
    <Icon
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.4475 17.3825H19.6325L27.1175 24.8825L24.8825 27.1175L17.3825 19.6325V18.4475L16.9775 18.0275C15.2675 19.4975 13.0475 20.3825 10.6325 20.3825C5.24751 20.3825 0.882507 16.0175 0.882507 10.6325C0.882507 5.24751 5.24751 0.882507 10.6325 0.882507C16.0175 0.882507 20.3825 5.24751 20.3825 10.6325C20.3825 13.0475 19.4975 15.2675 18.0275 16.9775L18.4475 17.3825ZM3.88251 10.6325C3.88251 14.3675 6.89751 17.3825 10.6325 17.3825C14.3675 17.3825 17.3825 14.3675 17.3825 10.6325C17.3825 6.89751 14.3675 3.88251 10.6325 3.88251C6.89751 3.88251 3.88251 6.89751 3.88251 10.6325Z" />
  </Container>
);

export default IconSearch;