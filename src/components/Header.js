import React from 'react';
import {Box, Image, Flex, Container, useColorMode} from '@chakra-ui/react'
import {ColorModeSwitcher} from './ColorModeSwitcher';
import Logo from '../logo.svg'

const Header = () => {

    const {colorMode} = useColorMode()

    return (
        <div>
            <Box
                as="header"
                py={2}
                bg={colorMode === 'dark'? 'gray.300' : 'gray.400'}
            >
                <Container maxW="container.lg">
                    <Flex
                        justifyContent={"space-between"}
                        alignItems={"center"}
                    >
                        <Image
                            src={Logo}
                            alt={"logo"}
                            boxSize="100px"
                            objectFit="cover"
                        />
                        <ColorModeSwitcher/>
                    </Flex>
                </Container>
            </Box>
        </div>
    );
};

export default Header;