import React from 'react';

import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import logo from '../assets/Logo.jpeg';
import '../Components/AppH.css';

const Header = () => {
    return (
        <header className="header-nav">
            <Navbar collapseOnSelect expand="lg" variant="light" fixed="top" style={{ backgroundColor: '#FFF1ED' }}>
                <Navbar.Brand className="ml-3">
                    <img src={logo} className="logo logo-scrolled" alt="Logo" style={{ width: '100px', height: 'auto', marginLeft: '20px' }} />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link>Home</Nav.Link>
                        <Nav.Link href="about-us">About Us</Nav.Link>
                        <NavDropdown title="What We Do" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Exclusive Wedding Deals</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="beach-wedding.php">Beach Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="royal-wedding.php">Royal Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="cruise-wedding.php">Cruise Wedding</NavDropdown.Item>
                            <NavDropdown.Item href="desert-wedding.php">Desert Wedding</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Wedding Services" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="wedding-decor">Wedding Decor</NavDropdown.Item>
                            <NavDropdown.Item href="wedding-planners">Wedding Planners</NavDropdown.Item>
                            <NavDropdown.Item href="#">Venue Selection</NavDropdown.Item>
                            <NavDropdown.Item href="hospitality.php">Hospitality</NavDropdown.Item>
                            <NavDropdown.Item href="catering-services.php">Catering</NavDropdown.Item>
                            <NavDropdown.Item href="entertainment">Entertainment </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="corporate-events/">Corporate Events</Nav.Link>
                        <NavDropdown title="Wedding Destination" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#">Indian</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="destination-wedding-in-agra">Agra</NavDropdown.Item>
                            <NavDropdown.Item href="destination-wedding-in-ahmedabad">Ahmedabad</NavDropdown.Item>
                            <NavDropdown.Item href="destination-wedding-in-jaipur">Jaipur</NavDropdown.Item>
                            <NavDropdown.Item href="destination-wedding-in-goa">Goa</NavDropdown.Item>
                            <NavDropdown.Item href="#">International</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="international-destination-wedding-in-antalya">Antalya</NavDropdown.Item>
                            <NavDropdown.Item href="international-destination-wedding-in-australia">Australia</NavDropdown.Item>
                            <NavDropdown.Item href="international-destination-wedding-in-bali">Bali</NavDropdown.Item>
                            <NavDropdown.Item href="international-destination-wedding-in-dubai">Dubai</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Memories" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="events_gallery">Events</NavDropdown.Item>
                            <NavDropdown.Item href="Wedding-new1">Wedding Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="gallery">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="video">Video Gallery</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link >Blog</Nav.Link>
                        <Nav.Link href="contact-us">Reach Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>

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
};

export default Header;
