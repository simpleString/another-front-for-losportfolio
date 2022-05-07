import { Box, Heading, Link, List, ListIcon, ListItem } from '@chakra-ui/react';
import { FaGithub, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box>
      <Heading>Links</Heading>
      <List>
        <ListItem>
          <ListIcon as={FaGithub} />
          <Link href="https://github.com">Github</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaYoutube} />
          <Link href="https://youtube.com">Youtube</Link>
        </ListItem>
        <ListItem>
          <ListIcon as={FaInstagram} />
          <Link href="https://instagram.com">Instagram</Link>
        </ListItem>
      </List>
    </Box>
  );
};

export default Footer;
