import { Button } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Image } from "@chakra-ui/image";
import { Stack, Circle, Flex, Box, Text } from "@chakra-ui/layout";
import { useMediaQuery } from "@chakra-ui/media-query";
import React from "react";

function Header() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

  return (
    <Stack>
      <Circle
        position="absolute"
        bg="gray.500"
        opacity="0.1"
        w="300px"
        h="300px"
        alignSelf="flex-end"
      />
      <Flex
        direction={{ base: "column", md: "row", lg: "row" }}
        spacing="200px"
        p={isNotSmallerScreen ? "32" : "0"}
        alignSelf="flex-start"
      >
        <Box mt={isNotSmallerScreen ? "0" : 16} align="flex-start">
          <Text fontSize="5xl" fontWeight="semibold">
            Hello, I'm
          </Text>
          <Text
            fontSize="7xl"
            fontWeight="bold"
            bgGradient="linear(to-r, cyan.400, blue.500, green.500)"
            bgClip="text"
          >
            Derek Hsieh
          </Text>
          <Text color="gray.500">Full-Stack iOS and Web Developer</Text>
          <Button
            mt={8}
            colorScheme="green"
            onClick={() => window.open("https://google.com")}
          >
            Get my Resume
          </Button>
        </Box>
        <Image
          alignSelf="center"
          mt={{ base: "0", md: "12" }}
          // mt={isNotSmallerScreen ? "0" : "12"}
          mb={{ base: "0", md: "12" }}
          borderRadius="full"
          backgroundColor="transparent"
          boxShadow="lg"
          boxSize="300px"
          src="https://avatars.githubusercontent.com/u/52396761?v=4"
        />
      </Flex>
    </Stack>
  );
}

export default Header;
