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


const url = "http://localhost:3000/"
export default function Category() {

    const [data, setData] = useState([]);
    const [updedt, setUpdate] = useState({});
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = useRef(null)
    const finalRef = useRef(null)

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

        fetch(`https://jsonplaceholder.typicode.com/events/${id}`, {
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

            <Heading textAlign="center" color="blue" mb="4">
                Admin Panel
            </Heading>
            {Array.isArray(data) ? (
                data.map((x) => console.log(x))
            ) : (
                <p>Data is not in the expected format.</p>
            )}
        </>

    );
}
