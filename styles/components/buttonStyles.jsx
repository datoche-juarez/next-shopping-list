import { whiten, darken, mode } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
  // style object base or defualt style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: () => ({
      bg: "primary.main",
      color: "black",
      m: 2,
      _hover: {
        bg: "primary.100",
        boxShadow: "md",
      },
    }),
    secondary: () => ({
      bg: "secondary.main",
      color: "white",
      m: 2,
      _hover: {
        bg: "secondary.200",
        boxShadow: "md",
      },
    }),
    secondaryOutline: () => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "secondary.main",
      color: "secondary.main",
      m: 2,
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),
    highlight: () => ({
      bg: "highlight.main",
      color: "white",
      m: 2,
      _hover: {
        bg: "highlight.200",
        boxShadow: "md",
      },
    }),
    highlightOutline: () => ({
      bg: "transparent",
      border: "1px solid",
      borderColor: "highlight.500",
      color: "highlight.500",
      m: 2,
      _hover: {
        boxShadow: "md",
        transform: "scale(1.02)",
      },
    }),
    warning: () => ({
      bg: "warning.main",
      color: "white",
      m: 2,
      _hover: {
        bg: "warning.200",
        boxShadow: "md",
      },
    }),
    danger: () => ({
      bg: "danger.main",
      color: "white",
      m: 2,
      _hover: {
        bg: "danger.200",
        boxShadow: "md",
      },
    }),
  },
  // default values for size and variant
  defaultProps: {},
};
