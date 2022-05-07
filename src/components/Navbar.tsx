import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Image,
  Link,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars, FaGithub } from 'react-icons/fa';
import { Link as ReachLink } from 'react-router-dom';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import LogoLight from '../assets/LogoLight.png';
import LogoBlack from '../assets/LogoBlack.png';

const Navbar = () => {
  const { colorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const links = [
    {
      name: 'home',
      to: '',
    },
    {
      name: 'games',
      to: '/games',
    },
    {
      name: 'posts',
      to: '/posts',
    },
  ];

  return (
    <>
      <Box w={'100vw'}>
        <Container maxW={'container.lg'} px={4} py={2}>
          <Flex justify={'space-between'} align="center">
            <Box display={['block', 'none']} onClick={onOpen}>
              <FaBars />
            </Box>

            <HStack spacing={4} display={['none', 'flex']}>
              <Image
                src={colorMode === 'dark' ? LogoLight : LogoBlack}
                boxSize="40px"
                objectFit="contain"
              />
              {links.map((link) => (
                <Link
                  as={ReachLink}
                  to={link.to}
                  key={link.name}
                  fontSize="lg"
                  textTransform={'capitalize'}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>
            <HStack spacing={2}>
              <FaGithub fontSize={30} />
              <Link
                fontSize="lg"
                textTransform={'capitalize'}
                href="https://github.com"
              >
                Github
              </Link>
              <ColorModeSwitcher />
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent maxW={'200px'}>
            <DrawerCloseButton />
            <DrawerBody>
              {links.map((link) => (
                <p key={link.name}>
                  <Link
                    as={ReachLink}
                    to={link.to}
                    fontSize="lg"
                    onClick={onClose}
                    textTransform={'capitalize'}
                  >
                    {link.name}
                  </Link>
                </p>
              ))}
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Navbar;
