import { useSelector } from "react-redux";
import {
  useDisclosure,
  Button,
  ModalOverlay,
  Modal,
  ModalContent,
  Flex,
  Avatar,
  Textarea,
  ModalCloseButton,
  ModalBody,
  Box,
  Input,
} from "@chakra-ui/react";

import React from "react";
import  Axios  from "axios";

export const TweetPage = () => {
  const { username } = useSelector((state) => state.userSlice.value);
  const { isOpen, onOpen, onClose } = useDisclosure();//--- Modal
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  const onTweet = async () => {
    
    try {
      const data = {
        konten : document.getElementById("write").value,
      }
      const token = localStorage.getItem("token")
      const writer = document.getElementById("write").value;
      const response = await Axios.post(
        "http://localhost:2000/tweet/posting",
        data,{
          headers: {Authorization: `Bearer ${token}`}
        }
        );
        onClose()
        window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        width="52"
        borderRadius="full"
        colorScheme="twitter"
      >
        Tweet
      </Button>

      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalBody p={6}>
          <ModalContent>
            <ModalCloseButton />
            <Box m="5">
              <Flex Flex pl="6" pt="10" pr="6" bg="white" maxW="40rem">
                <Avatar name={username} mr="5" />
                <Textarea
                  mb={4}
                  placeholder="Apa yang sedang terjadi?"
                  id="write"
                />
              </Flex>
                <Input type="file"/>
              <Flex pt="2" bg="white" maxW="40rem" justifyContent="right">
                <Button
                  colorScheme="twitter"
                  borderRadius="full"
                  onClick={onTweet}
                >
                  Tweet
                </Button>
              </Flex>
            </Box>
          </ModalContent>
        </ModalBody>
      </Modal>
    </>
  );
};
