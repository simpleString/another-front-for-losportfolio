import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Main';
import Game from './components/Game';
import Games from './components/Games';
import Post from './components/Post';
import Posts from './components/Posts';
import Layout from './Layouts';
import theme from './theme';

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Navbar />
      <Layout>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
        <Routes>
          <Route path="/games/:topic/:slug" element={<Game />} />
        </Routes>
        <Routes>
          <Route path="/games" element={<Games />} />
        </Routes>
        <Routes>
          <Route path="/posts/:slug" element={<Post />} />
        </Routes>
        <Routes>
          <Route path="/posts" element={<Posts />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  </ChakraProvider>
);
