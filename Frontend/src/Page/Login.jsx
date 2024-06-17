import React, { useState } from 'react';
import { Box, Flex, Image, Text, FormControl, FormLabel, Input, Button, Link, useToast, Checkbox } from '@chakra-ui/react';
import axios from 'axios';
import url from '../Components/vars';
import AppNavbar from '../Components/AppNavbar';
import {  useNavigate } from "react-router-dom";
import Footer from '../Components/Footer';


const Login = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [isForgetPassword, setIsForgetPassword] = useState(false);
  const [isEventPlanner, setIsEventPlanner] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    profilePicture: '',
    eventsBooked: [],
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const signupData = {
        ...formData,
        role: isEventPlanner ? 'eventPlanner' : undefined,
      };
      const response = await axios.post(`${url}/users/register`, signupData);
      toast({
        title: 'Signup Successful',
        description: response.data.msg,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Signup Failed',
        description: error.response?.data?.msg || 'Failed to signup',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/users/login`, {
        email: formData.email,
        password: formData.password,
      });
      toast({
        title: 'Login Successful',
        description: 'Logged in successfully',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userDetails', JSON.stringify(response.data));

    
      navigate("/")
    } catch (error) {
      toast({
        title: 'Login Failed',
        description: error.response?.data?.msg || 'Failed to login',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${url}/forgot-password`, {
        email: formData.email,
        password: formData.password,
      });
      toast({
        title: 'Password Reset Successful',
        description: response.data.msg,
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Password Reset Failed',
        description: error.response?.data?.msg || 'Failed to reset password',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleFormSwitch = () => {
    setIsLoginForm(!isLoginForm);
    setFormData({
      username: '',
      email: '',
      password: '',
      profilePicture: '',
      eventsBooked: [],
    });
  };

  return (
    <>
    <Flex minH="100vh" align="center" justify="center" flexDirection={{ base: 'column', md: 'row' }} pl={{ base: 0, md: 10 }}>
      {isLoginForm && (
        <Box flex={{ base: 'none', md: '0 0 40%' }} w="100%" h={{ base: 'auto', md: '90vh' }} pl={{ base: 0, md: 10 }}>
          <Image
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
            alt="Background"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="50%"
          />
        </Box>
      )}

      <Box flex={{ base: 'none', md: '0 0 60%' }} w="100%" pl={{ base: 0, md: 10 }} pr={{ base: 0, md: 80 }}>
        <Text as="h1" fontSize="3xl" mb={6} textAlign="center">
          Welcome to Event-Maestro
        </Text>
        <Text fontSize="2xl" mb={4}>
          {isLoginForm ? 'Login' : 'Signup'}
        </Text>
        <form onSubmit={isLoginForm ? handleLogin : handleSignUp}>
          {!isForgetPassword && (
            <>
              <FormControl id="email" mb={4}>
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </FormControl>
              {!isLoginForm && (
                <>
                  <FormControl id="username" mb={4}>
                    <FormLabel>Username</FormLabel>
                    <Input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      placeholder="Enter your username"
                      required
                    />
                  </FormControl>
                  <FormControl id="profilePicture" mb={4}>
                    <FormLabel>Profile Picture</FormLabel>
                    <Input
                      type="text"
                      name="profilePicture"
                      value={formData.profilePicture}
                      onChange={handleChange}
                      placeholder="Enter your profile picture URL"
                    />
                  </FormControl>
                  <FormControl id="role" mb={4}>
                    <Checkbox
                      isChecked={isEventPlanner}
                      onChange={() => setIsEventPlanner(!isEventPlanner)}
                    >
                      Sign up as Event Planner
                    </Checkbox>
                  </FormControl>
                </>
              )}
              <FormControl id="password" mb={4}>
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                />
              </FormControl>
              <Button type="submit" bg="#FEAEA3"
                    color="white"
                    _hover={{ bg: "#A0522D" }} mb={4}>
                {isLoginForm ? 'Login' : 'Signup'}
              </Button>
              <Flex justify="space-between">
                <Link onClick={() => setIsForgetPassword(!isForgetPassword)}>
                  {isLoginForm ? 'Forgot Password?' : ''}
                </Link>
                <Link onClick={handleFormSwitch}>
                  {isLoginForm ? 'Signup' : 'Back to Login'}
                </Link>
              </Flex>
            </>
          )}
          {isForgetPassword && (
            <>
              <FormControl id="newPassword" mb={4}>
                <FormLabel>Reset Your Password</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
                <Input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                  required
                />
              </FormControl>
              <Button type="submit" bg="#FEAEA3"
                    color="white"
                    _hover={{ bg: "#A0522D" }} mb={4} mr={4} onClick={handleForgotPassword}>
                Reset Password
              </Button>
              <Link onClick={() => setIsForgetPassword(!isForgetPassword)} fontWeight={"bold"}>Back to Login</Link>
            </>
          )}
        </form>
      </Box>

      {!isLoginForm && (
        <Box flex={{ base: 'none', md: '0 0 40%' }} w="100%" h={{ base: 'auto', md: '90vh' }} ml={{ base: -60, md: 0 }} pr={10}>
          <Image
            src="https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg"
            alt="Background"
            objectFit="cover"
            w="100%"
            h="100%"
            borderRadius="50%"
          />
        </Box>
      )}
    </Flex>
  </>
  );
};

export default Login;
