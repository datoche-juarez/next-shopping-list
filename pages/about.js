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
        <Box boxShadow="xl" borderRadius="6" p="8" backgroundColor="bgGray.500" border="1px solid black">
          <Text fontSize={{ sm: "md", md: "xl" }}>
            Introducing the ultimate tool for music producers and playlist
            curators. With or interactive Spotify playlist tool, you can easily
            keep track of albums you want to purchase. Simply create a playlist
            of songs that you want to sample, and our tool will take care of the
            rest.
            <br />
            <br />
            No more tedious manual editing or lost lists. Our tool will
            duplicate your playlist and turn it into a shopping wishlist that
            can be easily updated as you purchase albums. Mark off the albums
            you've bought, and keep your original playlist intact.
            <br />
            <br />
            Our user-friendly interface makes it easy to keep track of your
            progress and stay organized. Whether you're a professional music
            producers or just someone who loves creating playlists, our tool is
            the perfect solution for streamlining your workflow and keeping your
            music collection up-to-date.
            <br />
            <br />
            Get started now and streamline your music production process like
            never before!
            <br />
            <br />
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
