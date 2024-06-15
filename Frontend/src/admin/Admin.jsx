import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import "./admin.css";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    ButtonGroup,
    FormControl,
    FormLabel,
    Input,
    Text,
    Stack,
    Card,
    Image,
    CardBody,
    Divider,
    CardFooter,
    Heading,
    useDisclosure,
} from '@chakra-ui/react';
import url from '../Components/vars'; // Assuming this contains your API URL
import AppNavbar from '../Components/AppNavbar';
import Footer from '../Components/Footer';

const Admin = () => {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure();
    const initialRef = useRef(null);
    const finalRef = useRef(null);
    const [selectedItemId, setSelectedItemId] = useState(null); // State to store the ID of the selected item for update

    useEffect(() => {
        fetchData();
    }, []);

    // Fetch events data from the API
    const fetchData = async () => {
        try {
            const response = await fetch(`${url}/events`);
            const data = await response.json();
            setData(data.events);
         
            
        } catch (err) {
            console.log(err);
        }
    };

    // Handle event deletion
    const handleDelete = (id) => {
        const token = localStorage.getItem('token');

        axios.delete(`${url}/events/${id}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                // Remove the deleted event from the data array
                setData(prevData => prevData.filter(item => item._id !== id));
            })
            .catch(error => {
                console.error('Error deleting event:', error);
            });
    };

    // Handle open update modal
    const handleOpenUpdateModal = (item) => {
        setSelectedItemId(item._id);
        setTitle(item.title);
        setDescription(item.description);
        setDate(item.eventDate);
        setTime(item.time);
        setPrice(item.Price);
        setLocation(item.location);
        onOpen();
    };

    // Handle update event
    const handleUpdate = () => {
        const token = localStorage.getItem('token');
        const updatedEvent = {
            title,
            description,
            eventDate: date,
            time,
            Price: price,
            location
        };

        axios.patch(`${url}/events/${selectedItemId}`, updatedEvent, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => {
                // Update the event in the data array
                const updatedData = data.map(item => item._id === selectedItemId ? response.data : item);
                setData(updatedData);
                onClose();
                fetchData()
            })
            .catch(error => {
                console.error('Error updating event:', error);
            });
    };

    return (
        <>
            <AppNavbar />
            <div id='admin'>
                <Heading textAlign="center" color="blue" mb="4">
                    Admin Panel
                </Heading>
                <Button onClick={onOpen} mb="4" colorScheme="blue">Create</Button>
                <div id='container'>
                    {data.map((item, index) => (
                        <Card
                            key={index}
                            maxW="l"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            bg="white"
                            mb="4"
                        >
                            <Image
                                src={item.imageUrl}
                                alt={item.location}
                                borderRadius="lg"
                                height="250px"
                                objectFit="cover"
                            />
                            <CardBody>
                                <Stack spacing="3">
                                    <Text fontWeight="bold" size="md" color="gray.700">
                                        {item.title}
                                    </Text>
                                    <Text color="gray.600">
                                        {item.description}
                                    </Text>
                                    <Text color="blue.600" fontSize="2xl">
                                        Price: ${item.Price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup>
                                    <Button onClick={() => handleOpenUpdateModal(item)}>Update</Button>
                                    <Button
                                        variant="ghost"
                                        colorScheme="red"
                                        onClick={() => handleDelete(item._id)}
                                    >
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                {/* Modal for updating an event */}
                <Modal
                    initialFocusRef={initialRef}
                    finalFocusRef={finalRef}
                    isOpen={isOpen}
                    onClose={onClose}
                >
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Update Event</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody pb={6}>
                            <FormControl>
                                <FormLabel>Title</FormLabel>
                                <Input
                                    value={title}
                                    ref={initialRef}
                                    placeholder='Title'
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Description</FormLabel>
                                <Input
                                    value={description}
                                    placeholder='Description'
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Price</FormLabel>
                                <Input
                                    value={price}
                                    placeholder='Price'
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Date</FormLabel>
                                <Input
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    placeholder='Date'
                                />
                            </FormControl>
                            <FormControl>
                                <FormLabel>Time</FormLabel>
                                <Input
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    placeholder='Time'
                                />
                            </FormControl>
                            <FormControl mt={4}>
                                <FormLabel>Location</FormLabel>
                                <Input
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder='Location'
                                />
                            </FormControl>
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleUpdate} colorScheme='blue' mr={3}>
                                Save
                            </Button>
                            <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </div>
            <Footer />
        </>
    );
};

export default Admin;
