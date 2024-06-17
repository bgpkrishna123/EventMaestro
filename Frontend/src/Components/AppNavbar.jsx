import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  Image,
  IconButton,
  useDisclosure,
  Stack,
  Input,
  InputGroup,
  InputRightElement,
  Button,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import Logo from '../assets/Logo.jpeg';
import axios from 'axios';
import url from './vars';

function AppNavbar({ data, setData }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    handleSearch();
    const token = localStorage.getItem('token');
    if (token) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, []); 

  const handleSearch = async () => {
    try {
      const response = await axios.get(`${url}/events/search?title=${searchQuery}`);
      console.log(response.data);
      setData(response.data);
      setSearchResults(response.data); 
    } catch (error) {
      console.error('Error searching events:', error);
    }
  };

  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleLogout = () => {
    
    localStorage.clear();
    
    setLogin(false);
    
  };

  return (
    <Box bg="gray.100" px={4} position="sticky" top={0} zIndex={10} pt={1} pb={1}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box ml={5}>
          <Link href="/">
            <Image src={Logo} width="60px" height="60px" alt="Logo" borderRadius="50%" />
          </Link>
        </Box>
        <InputGroup size="md" w={{ base: 'full', md: 'auto' }} ml={5}>
          <Input
            pr="4.5rem"
            type="text"
            placeholder="Search events"
            value={searchQuery}
            onChange={handleChange}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSearch();
              }
            }}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleSearch}>
              <SearchIcon />
            </Button>
          </InputRightElement>
        </InputGroup>
        <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }} ml={5}>
          <Link href="/" fontWeight={500}>
            Home
          </Link>
          <Link href="/findEvents" fontWeight={500}>
              Find Events
            </Link>
            <Link href="/bookedEvents" fontWeight={500}>
           Booked Events
          </Link>
          <Link href="creator" fontWeight={500}>
            Create Events
          </Link>
          {login ? (
            <>
             
              <Link onClick={handleLogout} fontWeight={500}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link href="/auth" fontWeight={500}>
                Login
              </Link>
              <Link href="/auth" fontWeight={500}>
                Sign Up
              </Link>
            </>
          )}
        </HStack>
        <Flex alignItems="center">
          <IconButton
            size="lg"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }} fontWeight={800} mt={2}>
          <Stack as="nav" spacing={4}>
            <Link href="/" fontWeight={500}>
              Home
            </Link>
            <Link href="/findEvents" fontWeight={500}>
              Find Events
            </Link>
            <Link href="creator" fontWeight={500}>
              Create Events
            </Link>
            {login ? (
              <>
                
                <Link onClick={handleLogout} fontWeight={500}>
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link href="/auth" fontWeight={500}>
                  Login
                </Link>
                <Link href="/auth" fontWeight={500}>
                  Sign Up
                </Link>
              </>
            )}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}

export default AppNavbar;
