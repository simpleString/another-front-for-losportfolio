import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

interface IMainPostBlockProps {
  header: string;
  link: {
    name: string;
    to: string;
  };
  text: string;
}

const MainPostBlock = ({ header, link, text }: IMainPostBlockProps) => {
  return (
    <Box>
      <HStack mb="2" mt="4">
        <Heading flexBasis="220" display={'inline-block'}>
          {header}
        </Heading>
        <Link to={link.to}>
          <Button
            bgColor="third"
            borderRadius="full"
            size="sm"
            px="4"
            color="primary"
          >
            {link.name}
          </Button>
        </Link>
      </HStack>
      <Text style={{ textIndent: 20 }}>{text}</Text>
    </Box>
  );
};

export default MainPostBlock;
