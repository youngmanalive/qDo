import React from 'react';
import { Global } from '@emotion/core';

import { LayoutContainer, Container } from './style';
import global from './global';

const Layout = ({ children }) => (
  <>
    <Global styles={global} />
    <LayoutContainer>
      <Container>{children}</Container>
    </LayoutContainer>
  </>
);

export default Layout;
