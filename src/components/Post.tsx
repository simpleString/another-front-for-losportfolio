import { Box, Divider, Heading } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../config';
import { useFetch } from '../hooks/useFetch';

const Post = () => {
  const { slug, topic } = useParams();
  const post = useFetch(`/posts/${slug}/${slug}.md`, 'GET') as string;
  const postName = useFetch(`posts/${slug}`, 'GET') as any;
  return (
    <Box m="auto" my="4">
      <Heading>{postName?.data}</Heading>
      <Divider mb="2" />
      <Box>
        <ReactMarkdown
          transformImageUri={(src) => {
            return BASE_URL + `posts/${slug}/${src}`;
          }}
        >
          {post}
        </ReactMarkdown>
      </Box>
    </Box>
  );
};

export default Post;
