import { Box, AspectRatio, Heading, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../config';
import { IGameData } from './Games';

interface ICardProps {
  game: IGameData;
  urlPrefix: string;
}

const Card = ({ game, urlPrefix }: ICardProps) => {
  return (
    <Box maxW="250px" m="auto" h="full">
      <Link to={`/${urlPrefix}/${game.postUrl}`}>
        <AspectRatio ratio={4 / 3} maxH="150px" margin="auto">
          <Image
            borderRadius="30px"
            objectFit="fill"
            boxSize="full"
            src={`${BASE_URL}${urlPrefix}/${game.img}`}
          />
        </AspectRatio>
        <Heading textAlign="center">{game.title}</Heading>
        <Text textAlign="center">{game.text}</Text>
      </Link>
    </Box>
  );
};

export default Card;
