import React from 'react';
import { Box, Flex, HStack, Link, Image, IconButton, useDisclosure, Stack, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, SearchIcon } from '@chakra-ui/icons';
import Logo from '../assets/Logo.jpeg';

function AppNavbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box bg="gray.100" px={4}>
            <Flex h={16} alignItems="center" justifyContent="space-between">
                <Box ml={5}>
                    <Link href="/">
                        <Image
                            src={Logo}
                            width="60px"
                            height="60px"
                            alt="Logo"
                            borderRadius="50%"
                        />
                    </Link>
                </Box>
                <InputGroup size="md" w={{ base: "full", md: "auto" }} ml={5}>
                    <Input
                        pr="4.5rem"
                        type="text"
                        placeholder="Search events"
                    />
                    <InputRightElement width="4.5rem">
                        <Button h="1.75rem" size="sm">
                            <SearchIcon />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                <HStack
                    as="nav"
                    spacing={4}
                    display={{ base: 'none', md: 'flex' }}
                    ml={5}
                >
                    <Link px={3} href="#">Find Events</Link>
                    <Link px={3} href="/creator">Create Events</Link>
                    <Link px={3} href="/auth">Login</Link>
                    <Link px={3} href="/auth">Sign Up</Link>
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
                <Box pb={4} display={{ md: 'none' }}>
                    <Stack as="nav" spacing={4}>
                        <Link href="#">Find Events</Link>
                        <Link href="#">Create Events</Link>
                        <Link href="/auth">Login</Link>
                        <Link href="/auth">Sign Up</Link>
                    </Stack>
                </Box>
            ) : null}
        </Box>
    );
}

export default AppNavbar;
