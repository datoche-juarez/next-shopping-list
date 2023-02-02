import Meta from "../components/Meta";
import Link from "next/link";

import { Box, Button, Text, Stack } from "@chakra-ui/react";

const about = () => {
  return (
    <div as="flex" color="primary.main">
      <Meta title="About" />
      <Stack p="32px">
        <Text as="b" fontSize="4xl">
          About
        </Text>
        <Box boxShadow="xl" borderRadius="6" p="8" backgroundColor="bgGray.500">
          <Text fontSize={{ sm: "xl", md: "2xl" }}>
            About section description goes here...
          </Text>
          <Link href="/">
            <Button variant="highlight">Go back</Button>
          </Link>
        </Box>
      </Stack>
    </div>
  );
};

export default about;
