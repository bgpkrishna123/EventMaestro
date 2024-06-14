import { Card, CardHeader, Text, Image, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button, useDisclosure, FormControl, FormLabel, Input } from '@chakra-ui/react'
import { useEffect, useRef, useState } from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


const url = "http://localhost:3000"
const init = {
    title: "",
    description: "",
    eventDate: "",
    time: "",
    Price: "",
    location: ""
};
export default function Category() {

    const [data, setData] = useState([]);
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [price, setPrice] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");
    const { isOpen, onOpen, onClose } = useDisclosure()

    
    const initialRef = useRef(null)
    const finalRef = useRef(null)
    // const OverlayOne = () => (
    //     <ModalOverlay
    //       bg='blackAlpha.300'
    //       backdropFilter='blur(10px) hue-rotate(90deg)'
    //     />
    //   )
    
    //   const OverlayTwo = () => (
    //     <ModalOverlay
    //       bg='none'
    //       backdropFilter='auto'
    //       backdropInvert='80%'
    //       backdropBlur='2px'
    //     />
    //   )
    
    //   const { isopen, onopen, onclose } = useDisclosure()
    //   const [overlay, setOverlay] = useState(<OverlayOne />)

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:3000/events/`);
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
        console.log(Array.isArray(data))
    }, []);


    const handleUpdate = (id) => {
        console.log({
            title: title,
            description: description,
            eventDate: date,
            time: time,
            Price: price,
            location: location,
        });
        fetch(`${url}/events/${id}`, {
            title: title,
            description: description,
            eventDate: date,
            time: time,
            Price: price,
            location: location,
        }, {
            method: "PUT",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
        console.log("I clicked");
    }

    const handleDelete = (id) => {

        fetch(`${url}/events/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

    return (
        <div >

            <Heading textAlign="center" color="blue" mb="4">
                Admin Panel
            </Heading>
            {/* <Button
        onClick={() => {
          setOverlay(<OverlayOne />)
          onopen()
        }}
      >
        Use Overlay one
      </Button>
      <Button
        ml='4'
        onClick={() => {
          setOverlay(<OverlayTwo />)
          onopen()
        }}
      >
        Use Overlay two
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onclose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onclose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
    
            <div >
                {Array.isArray(data) ? (
                    data.map((item) => {

                        <Card
                            maxW="sm"
                            borderWidth="1px"
                            borderRadius="lg"
                            overflow="hidden"
                            boxShadow="lg"
                            bg="white"
                            key={item._id}
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
                                    <Text size="md" color="gray.700">
                                        {item.title}
                                    </Text>
                                    <Text color="gray.600">
                                        {item.description}
                                    </Text>
                                    <Text color="blue.600" fontSize="2xl">
                                        Price:${item.Price}
                                    </Text>
                                </Stack>
                            </CardBody>
                            <Divider />
                            <CardFooter>
                                <ButtonGroup>
                                    <Button onClick={onOpen}>Update</Button>

                                    <Modal
                                        initialFocusRef={initialRef}
                                        finalFocusRef={finalRef}
                                        isOpen={isOpen}
                                        onClose={onClose}
                                    >
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Update your Event</ModalHeader>
                                            <ModalCloseButton />
                                            <ModalBody pb={6}>
                                                <FormControl>
                                                    <FormLabel>Title</FormLabel>
                                                    <Input
                                                        value={title}
                                                        ref={initialRef}
                                                        placeholder='Title'
                                                        onChange={(e) => setTitle(e.target.value)} />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Description</FormLabel>
                                                    <Input
                                                        value={description}
                                                        ref={initialRef}
                                                        placeholder='Description'
                                                        onChange={(e) => setDescription(e.target.value)} />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Price</FormLabel>
                                                    <Input
                                                        value={price}
                                                        ref={initialRef}
                                                        placeholder='Price'
                                                        onChange={(e) => setPrice(e.target.value)} />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Date</FormLabel>
                                                    <Input
                                                        value={date}
                                                        onChange={(e) => setDate(e.target.value)}
                                                        ref={initialRef}
                                                        placeholder='Date' />
                                                </FormControl>
                                                <FormControl>
                                                    <FormLabel>Time</FormLabel>
                                                    <Input
                                                        value={time}
                                                        onChange={(e) => setTime(e.target.value)}
                                                        ref={initialRef}
                                                        placeholder='Time' />
                                                </FormControl>


                                                <FormControl mt={4}>
                                                    <FormLabel>Address</FormLabel>
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
                                    <Button
                                        variant="ghost"
                                        colorScheme="red"
                                        onClick={() => handleDelete(id)}
                                    >
                                        Delete
                                    </Button>
                                </ButtonGroup>
                            </CardFooter>
                        </Card>

                    })
                ) : (
                    <Card
                        maxW="sm"
                        borderWidth="1px"
                        borderRadius="lg"
                        overflow="hidden"
                        boxShadow="lg"
                        bg="white"

                    >
                        <Image
                            src=""
                            alt="kuysz"
                            borderRadius="lg"
                            height="250px"
                            objectFit="cover"
                        />
                        <CardBody>
                            <Stack spacing="3">
                                <Text size="md" color="gray.700">
                                    Tttle
                                </Text>
                                <Text color="gray.600">
                                    Description
                                </Text>
                                <Text color="blue.600" fontSize="2xl">
                                    Price:$80
                                </Text>
                            </Stack>
                        </CardBody>
                        <Divider />
                        <CardFooter>
                            <ButtonGroup>
                                <Button onClick={onOpen}>Update</Button>

                                <Modal
                                    initialFocusRef={initialRef}
                                    finalFocusRef={finalRef}
                                    isOpen={isOpen}
                                    onClose={onClose}
                                >
                                    <ModalOverlay />
                                    <ModalContent>
                                        <ModalHeader>Update your Event</ModalHeader>
                                        <ModalCloseButton />
                                        <ModalBody pb={6}>
                                            <FormControl>
                                                <FormLabel>Title</FormLabel>
                                                <Input
                                                    value={title}
                                                    ref={initialRef}
                                                    placeholder='Title'
                                                    onChange={(e) => setTitle(e.target.value)} />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Description</FormLabel>
                                                <Input
                                                    value={description}
                                                    ref={initialRef}
                                                    placeholder='Description'
                                                    onChange={(e) => setDescription(e.target.value)} />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Price</FormLabel>
                                                <Input
                                                    value={price}
                                                    ref={initialRef}
                                                    placeholder='Price'
                                                    onChange={(e) => setPrice(e.target.value)} />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Date</FormLabel>
                                                <Input
                                                    value={date}
                                                    onChange={(e) => setDate(e.target.value)}
                                                    ref={initialRef}
                                                    placeholder='Date' />
                                            </FormControl>
                                            <FormControl>
                                                <FormLabel>Time</FormLabel>
                                                <Input
                                                    value={time}
                                                    onChange={(e) => setTime(e.target.value)}
                                                    ref={initialRef}
                                                    placeholder='Time' />
                                            </FormControl>


                                            <FormControl mt={4}>
                                                <FormLabel>Address</FormLabel>
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
                                <Button
                                    variant="ghost"
                                    colorScheme="red"
                                    onClick={() => handleDelete(id)}
                                >
                                    Delete
                                </Button>
                            </ButtonGroup>
                        </CardFooter>
                    </Card>


                )}
            </div>
        </div>

    );
}
