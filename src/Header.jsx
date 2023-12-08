import React from 'react';
import { LinkBox, LinkOverlay, Box, Heading, Text, Button, Image} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';




export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
    <>
      <Flex
        rounded='md'
        as="header"
        align="center"
        justify="space-between"
        justifyContent="center"
        p="200px"
        color="white"
        height="100%"
        width="1200px"
        top="0"
        zIndex="999"
        bgImage={"/fondo.jpg"}
        bgSize="cover"
        bgPosition="center"
      >
        <Box alignContent="center"
        >
          <Text p="10px"
          fontSize="60px"
          >EN BUSCA DE LA FELICIDAD</Text>
        <Box
        justify="space-between">
          <Button marginRight="10px" border="1px" borderColor="white" p="10px" height="50px" variant="ghost" color="white"_hover={{ color: 'black', backgroundColor: 'white' }}>VER DETALLES</Button>
          <Button marginLeft="10px" border="1px" borderColor="white" p="10px" height="50px" variant="ghost" color="white"_hover={{ color: 'black', backgroundColor: 'white' }}>VER ESTRENO</Button>
        </Box>
        </Box>
        </Flex>
    </>
  );
};

