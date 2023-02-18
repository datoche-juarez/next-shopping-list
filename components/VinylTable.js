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
import { Rating } from "./Rating.js";
import { albums } from "../data.js";

export const VinylTable = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

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
              <Checkbox />
              <HStack spacing="1">
                <Text>Name</Text>
                <Icon as={IoArrowDown} color="muted" boxSize="4" />
              </HStack>
            </HStack>
          </Th>
          <Th>Status</Th>
          <Th>Email</Th>
          <Th>Role</Th>
          <Th>Rating</Th>
          <Th></Th>
        </Tr>
      </Thead>
      <Tbody>
        {albums.map((album) => (
          <Tr key={album.id}>
            <Td>
              <HStack spacing="3">
                <Checkbox />
                <Avatar name={album.name} src={album.avatarUrl} boxSize="10" />
                <Box>
                  <Text fontWeight="medium">{album.name}</Text>
                  <Text color="muted">{album.handle}</Text>
                </Box>
              </HStack>
            </Td>
            <Td>
              <Badge
                size="sm"
                colorScheme={album.status === "active" ? "green" : "red"}
              >
                {album.status}
              </Badge>
            </Td>
            <Td>
              <Text color="muted">{album.email}</Text>
            </Td>
            <Td>
              <Text color="muted">{album.role}</Text>
            </Td>
            <Td>
              <Text color="muted">
                <Rating defaultValue={album.rating} size="xl" />
              </Text>
            </Td>
            <Td>
              <HStack spacing="1">
                <IconButton
                  icon={<FiTrash2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Delete album"
                />
                <IconButton
                  icon={<FiEdit2 fontSize="1.25rem" />}
                  variant="ghost"
                  aria-label="Edit album"
                />
              </HStack>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};
