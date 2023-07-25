import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/userSlice";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Tag,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Grid,
  GridItem,
  Image,
} from "@chakra-ui/react";
import { TweetPage } from "./TweetPage";

export const NavbarComp = () => {
  const { username, email, profilePic } = useSelector(
    (state) => state.userSlice.value
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const fotoProfil = "http://localhost:2000/" + profilePic;

  const onLogout = () => {
    dispatch(logout());
    localStorage.removeItem("id");
    window.location.reload();
    Navigate('/login')
  };

  return (
    <Box w={[200, 300, 350]} pt={6}>
      <Grid justifyContent="center" templateRows="repeat(12, 1fr)">
        <GridItem>
          <Tag size="lg" borderRadius="full" p="6px" pr={5} colorScheme="white">
            <Image as={Link} to="/">
              <img
                alt="svgImg"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNDgiIGhlaWdodD0iNDgiCnZpZXdCb3g9IjAgMCA0OCA0OCIKc3R5bGU9IiBmaWxsOiMwMDAwMDA7Ij48bGluZWFyR3JhZGllbnQgaWQ9Il9vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSIgeDE9IjEwLjM0MSIgeDI9IjQwLjc5OCIgeTE9IjguMzEyIiB5Mj0iMzguNzY5IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMmFhNGY0Ij48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDA3YWQ5Ij48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI19vc245eklOMmY2UmhUc1k4V2hZNGFfNU1RMGdQQVlZeDdhX2dyMSkiIGQ9Ik00Ni4xMDUsMTEuMDJjLTEuNTUxLDAuNjg3LTMuMjE5LDEuMTQ1LTQuOTc5LDEuMzYyYzEuNzg5LTEuMDYyLDMuMTY2LTIuNzU2LDMuODEyLTQuNzU4CWMtMS42NzQsMC45ODEtMy41MjksMS43MDItNS41MDIsMi4wODJDMzcuODYsOC4wMzYsMzUuNjEyLDcsMzMuMTIyLDdjLTQuNzgzLDAtOC42NjEsMy44NDMtOC42NjEsOC41ODIJYzAsMC42NzEsMC4wNzksMS4zMjQsMC4yMjYsMS45NThjLTcuMTk2LTAuMzYxLTEzLjU3OS0zLjc4Mi0xNy44NDktOC45NzRjLTAuNzUsMS4yNjktMS4xNzIsMi43NTQtMS4xNzIsNC4zMjIJYzAsMi45NzksMS41MjUsNS42MDIsMy44NTEsNy4xNDdjLTEuNDItMC4wNDMtMi43NTYtMC40MzgtMy45MjYtMS4wNzJjMCwwLjAyNiwwLDAuMDY0LDAsMC4xMDFjMCw0LjE2MywyLjk4Niw3LjYzLDYuOTQ0LDguNDE5CWMtMC43MjMsMC4xOTgtMS40ODgsMC4zMDgtMi4yNzYsMC4zMDhjLTAuNTU5LDAtMS4xMDQtMC4wNjMtMS42MzItMC4xNThjMS4xMDIsMy40MDIsNC4yOTksNS44ODksOC4wODcsNS45NjMJYy0yLjk2NCwyLjI5OC02LjY5NywzLjY3NC0xMC43NTYsMy42NzRjLTAuNzAxLDAtMS4zODctMC4wNC0yLjA2NS0wLjEyMkM3LjczLDM5LjU3NywxMi4yODMsNDEsMTcuMTcxLDQxCWMxNS45MjcsMCwyNC42NDEtMTMuMDc5LDI0LjY0MS0yNC40MjZjMC0wLjM3Mi0wLjAxMi0wLjc0Mi0wLjAyOS0xLjEwOEM0My40ODMsMTQuMjY1LDQ0Ljk0OCwxMi43NTEsNDYuMTA1LDExLjAyIj48L3BhdGg+PC9zdmc+"
              />
            </Image>
            <Box h="auto" textAlign="left" />
          </Tag>
        </GridItem>
        <GridItem>
          <Box as={Link} to="/">
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              <Box h="auto" textAlign="left" ml={5}>
                Beranda
              </Box>
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-hash"
                viewBox="0 0 16 16"
              >
                <path d="M8.39 12.648a1.32 1.32 0 0 0-.015.18c0 .305.21.508.5.508.266 0 .492-.172.555-.477l.554-2.703h1.204c.421 0 .617-.234.617-.547 0-.312-.188-.53-.617-.53h-.985l.516-2.524h1.265c.43 0 .618-.227.618-.547 0-.313-.188-.524-.618-.524h-1.046l.476-2.304a1.06 1.06 0 0 0 .016-.164.51.51 0 0 0-.516-.516.54.54 0 0 0-.539.43l-.523 2.554H7.617l.477-2.304c.008-.04.015-.118.015-.164a.512.512 0 0 0-.523-.516.539.539 0 0 0-.531.43L6.53 5.484H5.414c-.43 0-.617.22-.617.532 0 .312.187.539.617.539h.906l-.515 2.523H4.609c-.421 0-.609.219-.609.531 0 .313.188.547.61.547h.976l-.516 2.492c-.008.04-.015.125-.015.18 0 .305.21.508.5.508.265 0 .492-.172.554-.477l.555-2.703h2.242l-.515 2.492zm-1-6.109h2.266l-.515 2.563H6.859l.532-2.563z" />
              </svg>
              <Box h="auto" textAlign="left" ml={5}>
                Jelajahi
              </Box>
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-bell"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
              </svg>
              <Box h="auto" textAlign="left" ml={5}>
                Notifikasi
              </Box>
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Tag size="lg" borderRadius="full" p="6px" pr={5} colorScheme="white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-envelope"
              viewBox="0 0 16 16"
            >
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
            </svg>
            <Box h="auto" textAlign="left" ml={5}>
              Pesan
            </Box>
          </Tag>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-bookmark"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
              </svg>
              <Box h="auto" textAlign="left" ml={5}>
                Markah
              </Box>
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-card-list"
                viewBox="0 0 16 16"
              >
                <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z" />
                <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
              </svg>
              <Box h="auto" textAlign="left" ml={5}>
                Daftar
              </Box>
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Tag size="lg" borderRadius="full" p="6px" pr={5} colorScheme="white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
            </svg>
            <Box h="auto" textAlign="left" ml={5}>
              Profil
            </Box>
          </Tag>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
              <Box h="auto" textAlign="left" ml={5}>
                Lainnya
              </Box>
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            >
              <TweetPage />
            </Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            ></Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Box>
            <Tag
              size="lg"
              borderRadius="full"
              p="6px"
              pr={5}
              colorScheme="white"
            ></Tag>
          </Box>
        </GridItem>
        <GridItem>
          <Menu>
            <MenuButton>
              <Flex>
                <Tag
                  size="lg"
                  borderRadius="full"
                  p="6px"
                  pr={5}
                  _hover={{ colorScheme: "blue" }}
                  _focus={{ boxShadow: "outline" }}
                >
                  <Avatar name={username} src={fotoProfil} />
                  <Box ml="3">
                    <Text fontWeight="bold">{username}</Text>
                    <Text fontSize="sm">{email}</Text>
                  </Box>
                </Tag>
              </Flex>
            </MenuButton>
            <MenuList>
              <MenuItem as={Link} to="/login" onClick={onLogout}>
                Keluar dari {username}
              </MenuItem>
              <MenuItem as={Link} to="/profil">
                Profil
              </MenuItem>
            </MenuList>
          </Menu>
        </GridItem>
      </Grid>
    </Box>
  );
};
