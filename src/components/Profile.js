import React from "react";
import { useMediaQuery } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/layout";

function Profile() {
  const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");
  return <div></div>;
}

export default Profile;
