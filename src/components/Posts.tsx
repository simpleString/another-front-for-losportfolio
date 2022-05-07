import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Image,
  Text,
  AspectRatio,
} from '@chakra-ui/react';
import { BASE_URL } from '../config';
import { useFetch } from '../hooks/useFetch';
import Card from './Card';

interface IPostData {
  img: string;
  postUrl: string;
  title: string;
  text: string;
}

const Posts = () => {
  const posts = useFetch<IPostData[]>('posts', 'GET');
  return (
    <Stack>
      <Box>
        <Heading textTransform="capitalize" my="4">
          Topical games
        </Heading>
        <SimpleGrid columns={[1, 2]} spacing="4">
          {posts?.map((post, index) => (
            <Card game={post} key={index} urlPrefix="posts" />
          ))}
        </SimpleGrid>
      </Box>
    </Stack>
  );
};

export default Posts;
