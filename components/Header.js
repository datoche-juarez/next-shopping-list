import { Text, Stack } from "@chakra-ui/react";

const Header = () => {
  return (
    <Stack backgroundColor="#131214" p="2rem" textAlign="center">
      <Text fontWeight="light" fontSize="md">
        ⚡️ Vinyl Shopping List ⚡️
      </Text>
      <Text fontWeight="light" fontSize="sm">
        An interactive tool for Spotify playlists.
      </Text>
    </Stack>
  );
};

export default Header;
