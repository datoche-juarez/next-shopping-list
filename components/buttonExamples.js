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

const ButtonExamples = () => {
    return (
        <Flex direction="row" justify="center" alignContent="center"
        alignItems="center"
        p="10"
        ml="0px"
        mr="0px" >
          <Box>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="secondaryOutline">Secondary Outline</Button>
            <Button variant="highlight">Highlight</Button>
            <Button variant="highlightOutline">Highlight Outline</Button>
            <Button variant="warning">Warning</Button>
            <Button variant="danger">Danger</Button>
          </Box>
        </Flex>
      );
};

export default ButtonExamples;
