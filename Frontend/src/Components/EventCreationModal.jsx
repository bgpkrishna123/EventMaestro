import React, { useState } from 'react';
import axios from 'axios';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Input,
    Textarea,
    Select,
} from '@chakra-ui/react';
import url from './vars';

const EventCreationModal = ({fetchData}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [formData, setFormData] = useState({
        Price: 50,
        category: 'Music',
        description: 'Join us for a weekend of music, food, and fun!',
        eventDate: '2024-08-10T18:00:00.000Z',
        imageUrl: [],
        location: 'Central Park, New York',
        mode: 'Offline',
        organizer: 'planner',
        ticketTypes: ['Gold', 'Silver', 'Bronze'],
        time: '18:00 - 23:00',
        title: 'Summer Music Festival',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageUrlChange = (e, index) => {
        const newImageUrl = [...formData.imageUrl];
        newImageUrl[index] = e.target.value;
        setFormData({
            ...formData,
            imageUrl: newImageUrl,
        });
    };

    const handleTicketTypesChange = (e) => {
        setFormData({
            ...formData,
            ticketTypes: e.target.value.split(',').map((type) => type.trim()),
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(formData);
        try {
          const token = localStorage.getItem('token');
          const response = await axios.post(`${url}/events/`, formData, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        //   console.log(response.data);
          // Reset form data or show success message
          onClose();
          fetchData();
        } catch (error) {
          console.error('Error creating event:', error);
          // Show error message
        }
    };

    return (
        <>
            <Button onClick={onOpen} mb="4" colorScheme="blue" marginTop="20px">
                Create
            </Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create Event</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Input
                            type="text"
                            name="title"
                            placeholder="Event Title"
                            value={formData.title}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Textarea
                            name="description"
                            placeholder="Event Description"
                            value={formData.description}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Input
                            type="number"
                            name="Price"
                            placeholder="Price"
                            value={formData.Price}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Input
                            type="text"
                            name="category"
                            placeholder="Category"
                            value={formData.category}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Input
                            type="text"
                            name="eventDate"
                            placeholder="Event Date"
                            value={formData.eventDate}
                            onChange={handleChange}
                            mb={4}
                        />

                        <div mb={4}>
                            <h3>Image URLs (up to 4)</h3>
                            {Array.from({ length: 4 }, (_, index) => (
                                <Input
                                    key={index}
                                    type="text"
                                    placeholder={`Image URL ${index + 1}`}
                                    value={formData.imageUrl[index] || ''}
                                    onChange={(e) => handleImageUrlChange(e, index)}
                                    mb={2}
                                />
                            ))}
                        </div>
                        <Input
                            type="text"
                            name="location"
                            placeholder="Location"
                            value={formData.location}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Select
                            name="mode"
                            placeholder="Mode"
                            value={formData.mode}
                            onChange={handleChange}
                            mb={4}
                        >
                            <option value="Offline">Offline</option>
                            <option value="Online">Online</option>
                        </Select>
                        <Input
                            type="text"
                            name="organizer"
                            placeholder="Organizer"
                            value={formData.organizer}
                            onChange={handleChange}
                            mb={4}
                        />
                        <Input
                            type="text"
                            name="ticketTypes"
                            placeholder="Ticket Types (comma-separated)"
                            value={formData.ticketTypes.join(', ')}
                            onChange={handleTicketTypesChange}
                            mb={4}
                        />
                        <Input
                            type="text"
                            name="time"
                            placeholder="Time"
                            value={formData.time}
                            onChange={handleChange}
                            mb={4}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                            Create
                        </Button>
                        <Button variant="ghost" onClick={onClose}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default EventCreationModal;