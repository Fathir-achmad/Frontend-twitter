import React, { useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Text,
  Flex,
  Textarea,
  Button,
  Image,
  Input,
} from "@chakra-ui/react";

import { Link } from "react-router-dom";
import {
  IoChatbubbleOutline,
  IoRepeat,
  IoShareOutline,
  IoHeartOutline,
} from "react-icons/io5";
import  Axios  from "axios";
import { useSelector } from "react-redux";

export const AllTweet =  () => {
  const Data = [1, 2, 3]
  const [tweet, setTweet] = useState()
  const [file, setFile] = useState()
  const { username, email, profilePic } = useSelector(
    (state) => state.userSlice.value
    );
    
    const getData = async () => {
      try {
        const {data} = await Axios.get(
          "http://localhost:2000/tweet/allPost"
          );
        console.log(data);
        setTweet(data.result)
      } catch (err) {
        console.log(err);
      }
    }
    useEffect(() => {getData()},[])
    
    const onTweet = async () => {
      try {
      
      const formData = new FormData()
      formData.append('file',file)
      formData.append('konten', document.getElementById("tulisan").value )
      console.log(formData);
      const token = localStorage.getItem("token")
      const response = await Axios.post(
        "http://localhost:2000/tweet/posting",
        formData,{
          headers: {
            Authorization: `Bearer ${token}`,
          },
          "Content-Type": "multipart/form-data"
        }
        );
        window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };
  const handleLike = async (id) => {
    const token = localStorage.getItem("token")
    try {
      const response = await Axios.post(
        "http://localhost:2000/tweet/likeTweet",
        {TwitId : id},
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Flex
        pl="6"
        pt="3"
        pb="3"
        pr="6"
        w={[400, 500, 600]}
        bg="whiteAlpha.900"
        borderRight="1px"
        borderLeft="1px"
        borderBottom="1px"
        borderColor="gray.300"
        position="fixed"
        zIndex={999}
      >
        <Box ml="3" w={[400, 500, 600]}>
          <Text
            fontSize={{ base: "18px", md: "20px", lg: "24px" }}
            fontWeight="extrabold"
            as={Link}
          >
            Beranda
          </Text>
        </Box>
      </Flex>
      <Flex
        w={[400, 500, 600]}
        mt="12"
        pl="6"
        pt="6"
        pr="6"
        boxShadow="lg"
        bg="white"
        borderRight="1px"
        borderLeft="1px"
        borderColor="gray.300"
      >
        <Avatar mr="5" name={username}/>
        <Box>
        <Textarea mb={4} placeholder="Apa yang sedang terjadi?" id="tulisan" />
        <Input type="file" 
        onChange={(e) => {
          setFile(e.target.files[0])}
        }
        />
        </Box>
      </Flex>

      <Flex
        w={[400, 500, 600]}
        pl="6"
        pb="6"
        pr="6"
        pt="2"
        boxShadow="lg"
        bg="white"
        borderBottom="1px"
        borderRight="1px"
        borderLeft="1px"
        borderColor="gray.300"
        justifyContent="right"
      >
        <Button colorScheme="twitter" borderRadius="full" onClick={onTweet}>
          Tweet
        </Button>
      </Flex>
      {tweet?.map((item) => {
        return (
          <>
            <Box
              w={[400, 500, 600]}
              h="auto"
              borderTop="1px"
              borderRight="1px"
              borderLeft="1px"
              borderColor="gray.300"
            >
              <Flex
                pl="6"
                pt="6"
                pr="6"
                boxShadow="lg"
                bg="white"
                borderRight="1px"
                borderLeft="1px"
                borderColor="gray.100"
              >
                <Avatar name={item.User.username} />
                <Box ml="3">
                  <Text
                    fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                    fontFamily="serif"
                  >
                    <Link fontWeight="bold">{item.User.username}</Link>{" "}

                    {item.User.email} - {item.createdAt}
                  </Text>

                </Box>
              </Flex>
              <Flex
                pl="20"
                pb="6"
                pr="6"
                boxShadow="lg"
                bg="white"
                textAlign="left"
                borderRight="1px"
                borderLeft="1px"
                borderColor="gray.100"
              >
                <Box>
                  <Text
                    fontSize={{ base: "12px", md: "14px", lg: "16px" }}
                    fontFamily="serif"
                  >
                    {item.konten}
                  </Text>
                  <Image src={`http://localhost:2000/${item.Image}`}/>
                </Box>
              </Flex>

              <Flex
                pl="6"
                pb="6"
                pr="6"
                boxShadow="lg"
                bg="white"
                borderBottom="1px"
                borderRight="1px"
                borderLeft="1px"
                borderColor="gray.100"
                justifyContent="space-evenly"
              >
                <Flex justifyContent="center">
                  <IoChatbubbleOutline />
                </Flex>
                <IoShareOutline />
                <Flex>
                  <IoHeartOutline onClick={() => handleLike(item.id)} />
                </Flex>
                <IoRepeat />
              </Flex>
            </Box>
          </>
        );
      })}
    </>
  );
};
