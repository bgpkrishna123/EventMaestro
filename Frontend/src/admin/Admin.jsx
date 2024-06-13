import { Card, CardHeader, Text, Image, CardBody, CardFooter, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

export default function Category() {

    const [data, setData] = useState([]);
    const [updedt, setUpdate] = useState({});

    const fetch = async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products/categories');
            const data = await response.json();
            setData(data);
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetch()
    }, []);

    const handleUpdate = (id) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, updedt, {
            method: "PATCH",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

    const handleDelete = (id) => {

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => console.log(json));
    }

    return (
        <>

            <Heading textAlign="center" color="blue"  mb="4">
                Admin Panel
            </Heading>
            <Card
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                boxShadow="lg"
                bg="white"
            >
                <Image
                    src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    height="250px"
                    objectFit="cover"
                />
                <CardBody>
                    <Stack spacing="3">
                        <Heading size="md" color="gray.700">
                            Living room Sofa
                        </Heading>
                        <Text color="gray.600">
                            This sofa is perfect for modern tropical spaces, baroque inspired
                            spaces, earthy toned spaces and for people who love a chic design
                            with a sprinkle of vintage design.
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                            $450
                        </Text>
                    </Stack>
                </CardBody>
                <Divider />
                <CardFooter>
                    <ButtonGroup>
                        <Button
                            variant="solid"
                            colorScheme="blue"
                            onClick={() => handleUpdate(id)}
                        >
                            Update
                        </Button>
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
        </>

    );
}
