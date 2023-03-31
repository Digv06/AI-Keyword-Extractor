import React from "react";
import { Heading, Text, Image } from "@chakra-ui/react";
import logo from "../assets/light-bulb.png";

const Header = () => {
  return (
    <>
      <Image src={logo} alt="logo" width={100} marginBottom="1rem" />
      <Heading color="white" marginBottom="1rem">
        AI Keyword Extractor
      </Heading>
      <Text fontSize={25} textAlign="center">
        Paste in you text below and we will extract keywords for you
      </Text>
    </>
  );
};

export default Header;
