import { Box, Heading, SimpleGrid, Stack } from '@chakra-ui/react';
import { useFetch } from '../hooks/useFetch';
import Card from './Card';

export interface IGameData {
  img: string;
  postUrl: string;
  title: string;
  text: string;
  type?: 'topical' | 'old' | 'completed';
}

const Games = () => {
  const games = useFetch<IGameData[]>('games/', 'GET');
  return (
    <Stack>
      <Box>
        <Heading textTransform="capitalize" my="4">
          Topical games
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing="4">
          {games?.map(
            (game, index) =>
              game.type == 'topical' && (
                <Card game={game} key={index} urlPrefix="games" />
              )
          )}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading textTransform="capitalize" my="4">
          Completed games
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing="4">
          {games?.map(
            (game, index) =>
              game.type == 'completed' && (
                <Card game={game} key={index} urlPrefix="games" />
              )
          )}
        </SimpleGrid>
      </Box>
      <Box>
        <Heading textTransform="capitalize" my="4">
          Old games
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing="4">
          {games?.map(
            (game, index) =>
              game.type == 'old' && (
                <Card game={game} key={index} urlPrefix="games" />
              )
          )}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default Games;
