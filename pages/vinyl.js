import Meta from "../components/Meta";
import Link from "next/link";
import { useState, useEffect } from "react";

import {
  Box,
  Button,
  Text,
  Stack,
  Image,
  Checkbox,
  ButtonGroup,
  Container,
  HStack,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  useBreakpointValue,
} from "@chakra-ui/react";

import { FiSearch } from "react-icons/fi";
import { VinylTable } from "../components/VinylTable";

import creds from "../creds.js";

const vinyl = ({ users }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const clientId = creds.clientId;
  const clientSecret = creds.clientSecret;

  const [userId, setUserId] = useState(creds.userId);
  const [playlistId, setplaylistId] = useState(creds.playlistId);
  const [token, setToken] = useState("");
  const [playlistInfo, setPlaylistInfo] = useState("");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    setUserId(userId);
    console.log("userId from useEffect: ", userId);
  }, []);

  useEffect(() => {
    setplaylistId(playlistId);
    console.log("playlistId from useEffect: ", playlistId);
  }, []);

  useEffect(() => {
    console.log("token from useEffect: ", token);
    console.log("playlistInfo from useEffect: ", playlistInfo);
  }, [token, playlistInfo]);

  const _getToken = async () => {
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });

    const data = await result.json();
    // console.log("getToken data: ", data);
    const token = data.access_token;
    setToken(token);
    console.log("token inside getToken function: ", token);
    return token;
  };

  const getUserInfo = async (token, userId) => {
    try {
      const result = await fetch(`https://api.spotify.com/v1/users/${userId}`, {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      });

      const data = await result.json();

      console.log("getUserInfo data: ", data);
      setUserInfo(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const _getPlaylistInfo = async (token, playlistId) => {
    try {
      const result = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}`,
        {
          method: "GET",
          headers: { Authorization: "Bearer " + token },
        }
      );

      const data = await result.json();

      console.log("getPlaylistInfo data: ", data);
      setPlaylistInfo(data);
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  return (
    <div>
      <Meta title="Vinyl List" />
      <Container
        py={{
          base: "4",
          md: "8",
        }}
        px={{
          base: "0",
          md: 8,
        }}
      >
        <Box
          bg="bg-surface"
          boxShadow={{
            base: "none",
            md: "sm",
          }}
          borderRadius={{
            base: "none",
            md: "lg",
          }}
        >
          <Stack spacing="5">
            <Box
              px={{
                base: "4",
                md: "6",
              }}
              pt="5"
            >
              <Stack
                direction={{
                  base: "column",
                  md: "row",
                }}
                justify="space-between"
              >
                <Text fontSize="lg" fontWeight="medium">
                  Members
                </Text>
                <InputGroup maxW="xs">
                  <InputLeftElement pointerEvents="none">
                    <Icon as={FiSearch} color="muted" boxSize="5" />
                  </InputLeftElement>
                  <Input placeholder="Search" />
                </InputGroup>
              </Stack>
            </Box>
            <Box overflowX="auto">
              <VinylTable />
            </Box>
            <Box
              px={{
                base: "4",
                md: "6",
              }}
              pb="5"
            >
              <HStack spacing="3" justify="space-between">
                {!isMobile && (
                  <Text color="muted" fontSize="sm">
                    Showing 1 to 5 of 42 results
                  </Text>
                )}
                <ButtonGroup
                  spacing="3"
                  justifyContent="space-between"
                  width={{
                    base: "full",
                    md: "auto",
                  }}
                  variant="secondary"
                >
                  <Button>Previous</Button>
                  <Button>Next</Button>
                </ButtonGroup>
              </HStack>
            </Box>
          </Stack>
        </Box>
      </Container>
      <Stack p="32px">
        <Text as="b" fontSize="4xl">
          Vinyl List
        </Text>
        <Box
          boxShadow="xl"
          borderRadius="6"
          p="8"
          backgroundColor="bgGray.500"
          border="1px solid black"
        >
          <Box mt="10px" mb="10px">
            <Text as="b" fontSize="2xl">
              Playlist Info
            </Text>
            {playlistInfo && (
              <div>
                {playlistInfo.images && (
                  <Image
                    src={playlistInfo.images[0].url}
                    maxWidth={72}
                    mt="10px"
                    mb="10px"
                  />
                )}
                {playlistInfo.name && <Text>Title: {playlistInfo.name}</Text>}
                {playlistInfo.description && (
                  <Text>Description: {playlistInfo.description}</Text>
                )}
                {playlistInfo.owner && (
                  <Text>Owner: {playlistInfo.owner.display_name}</Text>
                )}
                {playlistInfo && playlistInfo.tracks ? (
                  <div>
                    {playlistInfo.tracks.items.map((track) => (
                      <Box
                        backgroundColor="bgGray.800"
                        border="1px solid black"
                      >
                        <Checkbox colorScheme="highlight" m="10px">
                          <Text as="b">
                            Artist: {""} {track.track.artists[0].name}
                          </Text>
                          <Text as="b">
                            Title: {""} {track.track.name}
                          </Text>
                          <Text as="b">
                            Album: {""} {track.track.album.name}
                          </Text>
                          <Text as="b">
                            Duration: {""} {track.track.duration_ms}
                          </Text>
                          {/* <Text as="b">Popularity: {""} {track.track.popularity}</Text> */}
                        </Checkbox>
                      </Box>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </Box>
          <Button variant="primary" onClick={_getToken}>
            Fetch token
          </Button>
          <Button
            variant="primary"
            onClick={() => _getPlaylistInfo(token, playlistId)}
          >
            Fetch playlist info
          </Button>
          <Button variant="primary" onClick={() => getUserInfo(token, userId)}>
            Fetch user info
          </Button>
          <Link href="/">
            <Button variant="highlight">Go back</Button>
          </Link>
        </Box>
      </Stack>
    </div>
  );
};

export default vinyl;

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);

  return {
    props: {
      users: data,
    },
  };
}
