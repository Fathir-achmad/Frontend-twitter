import { useRef } from "react";
import React from "react";
import {
  Input,
  Button,
  FormLabel,
  VStack,
  FormControl,
  useDisclosure,
  Image,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalContent,
  ModalBody,
  ModalCloseButton,
  Container,
  HStack,
  Heading,
  Box,
  Text,
  Tag,
  Center,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "./RegisterPage";
import  Axios  from "axios";

export const LoginPage = () => {
  const usernameEmailPhone = useRef("");
  const password = useRef("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate()

  const onLogin = async () => {
    try {
      const user = {
        password: password.current.value,
        data: usernameEmailPhone.current.value,
      };
      const response = await Axios.post(
        "http://localhost:2000/user/login",
        user
        );
        localStorage.setItem("token",response.data.token)
        navigate("/")
        console.log(response.data.result[0].id)
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <HStack bg="white">
      <Image
        src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png"
        style={{ width: "820px", height: "820px" }}
      />
      <Box pl={7}>
        <img
          alt="svgImg"
          src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9Il9vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSIgeDE9IjEwLjM0MSIgeDI9IjQwLjc5OCIgeTE9IjguMzEyIiB5Mj0iMzguNzY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmFhNGY0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3YWQ5Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI19vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSkiIGQ9Ik00Ni4xMDUsMTEuMDJjLTEuNTUxLDAuNjg3LTMuMjE5LDEuMTQ1LTQuOTc5LDEuMzYyYzEuNzg5LTEuMDYyLDMuMTY2LTIuNzU2LDMuODEyLTQuNzU4CWMtMS42NzQsMC45ODEtMy41MjksMS43MDItNS41MDIsMi4wODJDMzcuODYsOC4wMzYsMzUuNjEyLDcsMzMuMTIyLDdjLTQuNzgzLDAtOC42NjEsMy44NDMtOC42NjEsOC41ODIJYzAsMC42NzEsMC4wNzksMS4zMjQsMC4yMjYsMS45NThjLTcuMTk2LTAuMzYxLTEzLjU3OS0zLjc4Mi0xNy44NDktOC45NzRjLTAuNzUsMS4yNjktMS4xNzIsMi43NTQtMS4xNzIsNC4zMjIJYzAsMi45NzksMS41MjUsNS42MDIsMy44NTEsNy4xNDdjLTEuNDItMC4wNDMtMi43NTYtMC40MzgtMy45MjYtMS4wNzJjMCwwLjAyNiwwLDAuMDY0LDAsMC4xMDFjMCw0LjE2MywyLjk4Niw3LjYzLDYuOTQ0LDguNDE5CWMtMC43MjMsMC4xOTgtMS40ODgsMC4zMDgtMi4yNzYsMC4zMDhjLTAuNTU5LDAtMS4xMDQtMC4wNjMtMS42MzItMC4xNThjMS4xMDIsMy40MDIsNC4yOTksNS44ODksOC4wODcsNS45NjMJYy0yLjk2NCwyLjI5OC02LjY5NywzLjY3NC0xMC43NTYsMy42NzRjLTAuNzAxLDAtMS4zODctMC4wNC0yLjA2NS0wLjEyMkM3LjczLDM5LjU3NywxMi4yODMsNDEsMTcuMTcxLDQxCWMxNS45MjcsMCwyNC42NDEtMTMuMDc5LDI0LjY0MS0yNC40MjZjMC0wLjM3Mi0wLjAxMi0wLjc0Mi0wLjAyOS0xLjEwOEM0My40ODMsMTQuMjY1LDQ0Ljk0OCwxMi43NTEsNDYuMTA1LDExLjAyIj48L3BhdGg+PC9zdmc+"
        />
        <Heading fontSize="60px" mt={20}>
          Sedang tren saat ini
        </Heading>
        <Heading mt={50}>Bergabunglah dengan Twitter sekarang juga.</Heading>
        <Box>
          <Tag
            as={Link}
            size="lg"
            borderRadius="full"
            colorScheme="gray"
            onClick={() => alert("Blom Diintegrasikan :)")}
            mt="10px"
          >
            <Box w={220} textAlign="center">
              Masuk dengan Google
            </Box>
          </Tag>
        </Box>
        <Box>
          <Tag
            as={Link}
            size="lg"
            borderRadius="full"
            colorScheme="gray"
            onClick={() => alert("Blom Diintegrasikan :)")}
            mt="10px"
          >
            <Box w={220} textAlign="center">
              Masuk dengan Apple{" "}
            </Box>
          </Tag>
        </Box>
        <Box mt={3} w={300}>
          <Text fontSize={10}>
            Dengan mendaftar, Anda menyetujui{" "}
            <a
              href="https://twitter.com/en/tos"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Persyaratan Layanan
            </a>{" "}
            dan{" "}
            <a
              href="https://twitter.com/en/privacy"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Kebijakan Privasi
            </a>
            , termasuk{" "}
            <a
              href="https://help.twitter.com/id/rules-and-policies/twitter-cookies"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "blue" }}
            >
              Penggunaan Kuki.
            </a>
          </Text>
        </Box>
        <Text fontWeight="bold" mt={50}>
          Sudah Punya Akun?
        </Text>
        <Tag
          as={Link}
          size="lg"
          borderRadius="full"
          variant="outline"
          colorScheme="blue"
          onClick={onOpen}
          mt="10px"
        >
          <Box w={220} textAlign="center">
            Masuk / Daftar{" "}
          </Box>
        </Tag>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent bgColor="whiteAlpha.800">
          <ModalHeader>
            <Center>
              <Link>
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9Il9vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSIgeDE9IjEwLjM0MSIgeDI9IjQwLjc5OCIgeTE9IjguMzEyIiB5Mj0iMzguNzY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmFhNGY0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3YWQ5Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI19vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSkiIGQ9Ik00Ni4xMDUsMTEuMDJjLTEuNTUxLDAuNjg3LTMuMjE5LDEuMTQ1LTQuOTc5LDEuMzYyYzEuNzg5LTEuMDYyLDMuMTY2LTIuNzU2LDMuODEyLTQuNzU4CWMtMS42NzQsMC45ODEtMy41MjksMS43MDItNS41MDIsMi4wODJDMzcuODYsOC4wMzYsMzUuNjEyLDcsMzMuMTIyLDdjLTQuNzgzLDAtOC42NjEsMy44NDMtOC42NjEsOC41ODIJYzAsMC42NzEsMC4wNzksMS4zMjQsMC4yMjYsMS45NThjLTcuMTk2LTAuMzYxLTEzLjU3OS0zLjc4Mi0xNy44NDktOC45NzRjLTAuNzUsMS4yNjktMS4xNzIsMi43NTQtMS4xNzIsNC4zMjIJYzAsMi45NzksMS41MjUsNS42MDIsMy44NTEsNy4xNDdjLTEuNDItMC4wNDMtMi43NTYtMC40MzgtMy45MjYtMS4wNzJjMCwwLjAyNiwwLDAuMDY0LDAsMC4xMDFjMCw0LjE2MywyLjk4Niw3LjYzLDYuOTQ0LDguNDE5CWMtMC43MjMsMC4xOTgtMS40ODgsMC4zMDgtMi4yNzYsMC4zMDhjLTAuNTU5LDAtMS4xMDQtMC4wNjMtMS42MzItMC4xNThjMS4xMDIsMy40MDIsNC4yOTksNS44ODksOC4wODcsNS45NjMJYy0yLjk2NCwyLjI5OC02LjY5NywzLjY3NC0xMC43NTYsMy42NzRjLTAuNzAxLDAtMS4zODctMC4wNC0yLjA2NS0wLjEyMkM3LjczLDM5LjU3NywxMi4yODMsNDEsMTcuMTcxLDQxCWMxNS45MjcsMCwyNC42NDEtMTMuMDc5LDI0LjY0MS0yNC40MjZjMC0wLjM3Mi0wLjAxMi0wLjc0Mi0wLjAyOS0xLjEwOEM0My40ODMsMTQuMjY1LDQ0Ljk0OCwxMi43NTEsNDYuMTA1LDExLjAyIj48L3BhdGg+PC9zdmc+"
                />
              </Link>
            </Center>
            <Center>Masuk ke Twitter </Center>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <Container>
              <VStack spacing={4} align="flex-start">
                <FormControl>
                  <FormLabel htmlFor="email">Email atau Username</FormLabel>
                  <Input
                    type="email"
                    name="email"
                    variant="filled"
                    ref={usernameEmailPhone}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    type="password"
                    name="password"
                    variant="filled"
                    ref={password}
                  />
                </FormControl>
                <Button
                  colorScheme="twitter"
                  mb={8}
                  onClick={onLogin}
                  _hover={{ colorScheme: "gray" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  Masuk
                </Button>
                <FormLabel mb="0">
                  Belum Punya Akun? <Register />
                </FormLabel>
              </VStack>
            </Container>
          </ModalBody>
        </ModalContent>
      </Modal>
    </HStack>
  );
};
