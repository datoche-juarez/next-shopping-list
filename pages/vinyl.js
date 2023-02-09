import Meta from "../components/Meta";
import Link from "next/link";
import { useState, useEffect } from "react";

import { Box, Button, Text, Stack } from "@chakra-ui/react";
import creds from "../creds.js";

const vinyl = ({ users }) => {
  const clientId = creds.clientId;
  const clientSecret = creds.clientSecret;

  const [userId, setUserId] = useState(creds.userId);
  const [playlistId, setplaylistId] = useState("3wWii5mrFLbS1uLvFJdgFO");
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
    console.log("token inside getUserInfo function: ", token);
    console.log("userId inside getUserInfo function: ", userId);

    const result = await fetch(`https://api.spotify.com/v1/users/${userId}`, {
      method: "GET",
      headers: { Authorization: "Bearer " + token },
    });

    const data = await result.json();

    console.log("userId inside getUserInfo function: ", userId);
    console.log("token inside getUserInfo function: ", token);

    console.log("getUserInfo data: ", data);
    setUserInfo(data);
    return data;
  };

  const _getPlaylistInfo = async (token, playlistId) => {
    console.log("token inside getPlaylistInfo function: ", token);
    console.log("playlistId inside getPlaylistInfo function: ", playlistId);

    const result = await fetch(
      `https://api.spotify.com/v1/playlists/${playlistId}`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + token },
      }
    );

    const data = await result.json();

    console.log("playlistId inside getPlaylistInfo function: ", playlistId);
    console.log("token inside getPlaylistInfo function: ", token);

    console.log("getPlaylistInfo data: ", data);
    setPlaylistInfo(data);
    return data;
  };

  return (
    <div>
      <Meta title="Vinyl List" />
      <Stack p="32px">
        <Text as="b" fontSize="4xl">
          Vinyl List
        </Text>
        <Box boxShadow="xl" borderRadius="6" p="8" backgroundColor="bgGray.500">
          <Text fontSize={{ sm: "xl", md: "2xl" }}>
            Vinyl shopping list goes here...
          </Text>
          <h1>List of users</h1>
          {users.map((user) => {
            return (
              <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
              </div>
            );
          })}
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
