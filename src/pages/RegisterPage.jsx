import Axios from "axios";
import React from "react";
import {
  Input,
  Button,
  FormLabel,
  VStack,
  FormControl,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalHeader,
  ModalFooter,
  ModalContent,
  ModalBody,
  Center,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Field, ErrorMessage, Formik, Form } from "formik";

export const Register = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onRegister = async (data) => {
    try {
      console.log(data);
      const response = await Axios.post(
        "http://localhost:2000/user/register",
        data
      );
      console.log(response.data.token);
    } catch (err) {
      console.log(err);
      // alert(err.response.data);
    }
  };

  return (
    <>
      <Link onClick={onOpen} style={{ color: "blue" }}>
        Daftar
      </Link>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Center>
              <Link>
                <img
                  alt="svgImg"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9Il9vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSIgeDE9IjEwLjM0MSIgeDI9IjQwLjc5OCIgeTE9IjguMzEyIiB5Mj0iMzguNzY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmFhNGY0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3YWQ5Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI19vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSkiIGQ9Ik00Ni4xMDUsMTEuMDJjLTEuNTUxLDAuNjg3LTMuMjE5LDEuMTQ1LTQuOTc5LDEuMzYyYzEuNzg5LTEuMDYyLDMuMTY2LTIuNzU2LDMuODEyLTQuNzU4CWMtMS42NzQsMC45ODEtMy41MjksMS43MDItNS41MDIsMi4wODJDMzcuODYsOC4wMzYsMzUuNjEyLDcsMzMuMTIyLDdjLTQuNzgzLDAtOC42NjEsMy44NDMtOC42NjEsOC41ODIJYzAsMC42NzEsMC4wNzksMS4zMjQsMC4yMjYsMS45NThjLTcuMTk2LTAuMzYxLTEzLjU3OS0zLjc4Mi0xNy44NDktOC45NzRjLTAuNzUsMS4yNjktMS4xNzIsMi43NTQtMS4xNzIsNC4zMjIJYzAsMi45NzksMS41MjUsNS42MDIsMy44NTEsNy4xNDdjLTEuNDItMC4wNDMtMi43NTYtMC40MzgtMy45MjYtMS4wNzJjMCwwLjAyNiwwLDAuMDY0LDAsMC4xMDFjMCw0LjE2MywyLjk4Niw3LjYzLDYuOTQ0LDguNDE5CWMtMC43MjMsMC4xOTgtMS40ODgsMC4zMDgtMi4yNzYsMC4zMDhjLTAuNTU5LDAtMS4xMDQtMC4wNjMtMS42MzItMC4xNThjMS4xMDIsMy40MDIsNC4yOTksNS44ODksOC4wODcsNS45NjMJYy0yLjk2NCwyLjI5OC02LjY5NywzLjY3NC0xMC43NTYsMy42NzRjLTAuNzAxLDAtMS4zODctMC4wNC0yLjA2NS0wLjEyMkM3LjczLDM5LjU3NywxMi4yODMsNDEsMTcuMTcxLDQxCWMxNS45MjcsMCwyNC42NDEtMTMuMDc5LDI0LjY0MS0yNC40MjZjMC0wLjM3Mi0wLjAxMi0wLjc0Mi0wLjAyOS0xLjEwOEM0My40ODMsMTQuMjY1LDQ0Ljk0OCwxMi43NTEsNDYuMTA1LDExLjAyIj48L3BhdGg+PC9zdmc+"
                />
              </Link>
            </Center>
            <Center>Bergabung dengan Twitter sekarang</Center>
          </ModalHeader>
          <ModalBody pb={6}>
            <Formik
              initialValues={{
                password: "",
                username: "",
                email: "",
                password_confirmation: "",
                phone: "",
              }}
              onSubmit={(values, action) => {
                onRegister(values);
                navigate("/login");
                // action.resetForm();
              }}
            >
              {(props) => {
                return (
                  <>
                    <Form>
                      <VStack spacing={4} align="flex-start">
                        <FormControl>
                          <FormLabel htmlFor="username">Username</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            name="username"
                            variant="filled"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel htmlFor="email">Email</FormLabel>
                          <Field
                            as={Input}
                            type="email"
                            name="email"
                            variant="filled"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel htmlFor="username">Phone Number</FormLabel>
                          <Field
                            as={Input}
                            type="text"
                            name="phone"
                            variant="filled"
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel htmlFor="password">Password</FormLabel>
                          <Field
                            as={Input}
                            type="password"
                            name="password"
                            variant="filled"
                          />
                          <ErrorMessage
                            component="div"
                            name="password"
                            style={{ color: "red" }}
                          />
                        </FormControl>
                        <FormControl>
                          <FormLabel>Konfirmasi Password</FormLabel>
                          <Field
                            as={Input}
                            type="password"
                            name="password_confirmation"
                            variant="filled"
                          />
                        </FormControl>
                        <ModalFooter>
                          <Button type="submit" colorScheme="blue" mr={3}>
                            Daftar
                          </Button>
                          <Button onClick={onClose}>Cancel</Button>
                        </ModalFooter>
                      </VStack>
                    </Form>
                  </>
                );
              }}
            </Formik>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
