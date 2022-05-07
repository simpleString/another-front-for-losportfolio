import { Container } from '@chakra-ui/react';
import React, { ReactFragment } from 'react';
import GameContainer from '../components/GameContainer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container maxW={'container.sm'} size="full" h="100vh">
      <main>
        <GameContainer />
        {children}
      </main>
    </Container>
  );
};

export default Layout;
