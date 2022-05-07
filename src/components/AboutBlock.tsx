import {
  Box,
  Center,
  Flex,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { FaUnity } from 'react-icons/fa';
import Profile from '../assets/profile.jpg';

const CustomListItem = ({ text }: { text: string }) => {
  return (
    <ListItem>
      <ListIcon as={FaUnity} fontSize="3xl" />
      <Text display={'inline'}>{text}</Text>
    </ListItem>
  );
};

const AboutBlock = () => {
  return (
    <Box>
      <VStack>
        <Flex
          minH="60px"
          bgColor="third"
          boxSize="90%"
          ml="10%"
          borderRadius="3xl"
        >
          <Center px={5}>
            <Text color="secondary">
              Hello, I’ m a gamedeveloper based in Russia!
            </Text>
          </Center>
        </Flex>
        <Flex w="full" display={['block', 'flex']}>
          <Box w="150px" h="150px" ml={'1%'} flexShrink={0} mt="5">
            <Image src={Profile} borderRadius="full" />
          </Box>
          <VStack ml="8" w="full">
            <Flex fontWeight="bold" fontSize="3xl" alignSelf={'flex-start'}>
              Michael Lois
            </Flex>
            <List
              bgColor={'secondary'}
              w="full"
              p="4"
              borderRadius="0 12px 12px"
            >
              <CustomListItem text="Game development on UNITY" />
              <CustomListItem text="Creation of the game concept" />
              <CustomListItem text="Creating and fixing bugs" />
            </List>
          </VStack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default AboutBlock;
