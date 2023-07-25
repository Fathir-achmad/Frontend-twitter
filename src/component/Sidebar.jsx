import { Flex, Avatar, Box, Text, Button } from "@chakra-ui/react";
import  Axios  from "axios";
import { useEffect, useState } from "react";

export const SidebarComp = () => {
  // const Data = [1, 2, 3, 4, 5]

  const [user,setUser] = useState()

  const getData = async () => {
    try {
      const {data} = await Axios.get(
        "http://localhost:2000/tweet/allPost"
        );
        console.log(data);
        setUser(data.result)
      } catch (err) {
        console.log(err);
      }
    }
  useEffect(() => {getData()},[])


  return (
    <>
      <Box
        w={[200, 300, 350]}
        ml="6"
        bg="gray.50"
        borderRadius="2xl"
        mt="6"
        h="500"
        overflow="scroll"
        position="-webkit-sticky"
      >
        <Box bgColor="gray.50" pt="6">
          <Text pl="4" pr="6" pb="3" fontSize="2xl" fontWeight="bold">
            Untuk Diikuti
          </Text>
        </Box>
        {user?.map((item) => {
          return (
            <>
              <Flex
                pl="6"
                pt="3"
                pb="3"
                pr="6"
                bg="gray.50"
                borderBottom="1px"
                borderColor="gray.200"
              >
                <Avatar name={item.User.username}/>
                <Text pl="4" pr="6" fontWeight="bold">
                  {item.User.username}
                </Text>
                <Button size="xs" colorScheme="twitter" borderRadius="full">
                  Ikuti
                </Button>
              </Flex>
            </>
          );
        })}
      </Box>
    </>
  );
};
