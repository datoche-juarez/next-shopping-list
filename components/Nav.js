import Link from "next/link";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  IconButton,
  Stack,
  useTheme,
  useColorMode,
} from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      mb={8}
      p={8}
      bg={["transparent", "transparent", "transparent", "transparent"]}
      color={["white", "white", "primary.700", "primary.700"]}
    >
      <Stack
        spacing={8}
        align="center"
        display="flex"
        justifyContent={["center", "space-around", "flex-end", "flex-end"]}
        direction={["column", "row", "row", "row"]}
        pt={[0, 1, 1, 1]}
      >
        <Link href="/">
          <Button variant="primary" width="100%">
            Home
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="primary"  width="100%">
            About
          </Button>
        </Link>
        <Link href="/vinyl">
          <Button variant="primary"  width="100%">
            Vinyl List
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Nav;
