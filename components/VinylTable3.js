import { useState, useEffect } from "react";

import {
  Avatar,
  Badge,
  Box,
  Checkbox,
  HStack,
  Icon,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  Stack,
} from "@chakra-ui/react";

import { FiEdit2, FiTrash2 } from "react-icons/fi";
import { IoArrowDown } from "react-icons/io5";
import { Rating } from "./Rating2.js";
import { myPlaylist } from "../data3.js";

export const VinylTable3 = (props) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  useEffect(() => {
    console.log("myPlaylist changed: ", myPlaylist);
  }, [myPlaylist]);

  if (isLoading) {
    return (
      <Stack
        h="100px"
        p="20px"
        m="20px"
        border="1px solid white"
        borderRadius="md"
      >
        <Text as="b">Loading...</Text>
      </Stack>
    );
  }
  return (
    <Table {...props}>
      <Thead>
        <Tr>
          <Th>
            <HStack spacing="3">
              <Checkbox colorScheme="purple" />
              <HStack spacing="1">
                <Text color="white">Title</Text>
                <Icon as={IoArrowDown} color="muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          {/* <Th>Title</Th> */}
          <Th color="white">Album</Th>
          <Th color="white">Role</Th>
          <Th color="white">Rating</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {myPlaylist && myPlaylist.tracks ? (
          <div>
            {myPlaylist.tracks.items.map((track) => (
              <Tr key={track.track.id}>
                <Td>
                  <HStack spacing="3" minW="xs">
                    <Checkbox colorScheme="purple" />
                    <Avatar
                      artist={track.track.artists[0].name}
                      src={track.track.album.images[0].url}
                      boxSize="10"
                    />
                    <Box>
                      <Text fontWeight="bold">{track.track.name}</Text>
                      <Text fontSize="xs" color="muted">
                        {track.track.artists[0].name}
                      </Text>
                    </Box>
                  </HStack>
                </Td>
                {/* <Td>
                  <Text color="muted">{track.track.artists[0].uri}</Text>
                </Td> */}
                <Td>
                  <Text fontWeight="bold" minW="xs" color="primary.200">
                    {track.track.album.name}
                  </Text>
                </Td>
                <Td>
                  <Badge
                    size="sm"
                    colorScheme={
                      track.is_local === "true" ? "red" : "green"
                    }
                  >
                    {track.is_local === "true" ? "Local" : "Spotify"}
                  </Badge>
                </Td>
                <Td>
                  <Text color="muted">
                    <Rating defaultValue={myPlaylist.rating} size="xl" />
                  </Text>
                </Td>
                <Td>
                  <HStack spacing="1">
                    <IconButton
                      icon={<FiTrash2 fontSize="1.25rem" />}
                      variant="ghost"
                      aria-label="Delete myPlaylist"
                    />
                    <IconButton
                      icon={<FiEdit2 fontSize="1.25rem" />}
                      variant="ghost"
                      aria-label="Edit myPlaylist"
                    />
                  </HStack>
                </Td>
              </Tr>
            ))}
          </div>
        ) : null}
      </Tbody>
    </Table>
  );
};
