import { Container, Stack } from '@chakra-ui/react';
import AboutBlock from './AboutBlock';
import Footer from './Footer';
import GameContainer from './GameContainer';
import MainPostBlock from './MainPostBlock';

const Main = () => {
  return (
    <Stack spacing={2} direction="column" py={4}>
      <AboutBlock />
      <MainPostBlock
        header="My progress"
        link={{ name: 'Go to Projects', to: '/games' }}
        text="      Hello! My name is Michael. I am 21 years old, studying at a technical university and developing games👾👾👾 2 years. The first year I was engaged in personal projects, while studying the Unity engine. For the second year, I was lucky to work with publishers, sell a few of my games, and also make a couple of games for bloggers!"
      />
      <MainPostBlock
        header="Experience"
        link={{ name: 'Go to Posts', to: '/posts' }}
        text="            Having a certain experience is an amazing property of human consciousness. With my games, I try to convey the experience to the players. And also I share the experience of creating games with other developers in my posts"
      />
      <Footer />
    </Stack>
  );
};

export default Main;
