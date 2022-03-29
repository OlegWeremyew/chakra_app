import React from 'react';
import {
    ChakraProvider,
    Box,
    Heading,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    Container,
    Divider,
    extendTheme,
} from '@chakra-ui/react';
import {ColorModeSwitcher} from './components/ColorModeSwitcher';
import {Logo} from './Logo';
import Header from './components/Header'
import CardList from "./components/CardList";

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        "userId": 1,
        "id": 2,
        "title": "qui est esse",
        "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        "userId": 1,
        "id": 5,
        "title": "nesciunt quas odio",
        "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
]

const theme = extendTheme({
    colors: {
        brand: {
            100: 'gray',
            200: 'gray',
            300: 'gray',
            400: 'gray',
            500: 'brown',
            600: 'brown',
            700: 'brown',
        },
    },
    components: {
        Button: {
            variants: {
                brand: props => ({
                    bg: props.colorMode === 'dark' ? "brand.300" : 'brand.700',
                    color: "white",
                    _hover: {
                        bg: props.colorMode === 'dark' ? "brand.700" : 'brand.300',
                    }
                }),
            },
        },
    },
})

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Header/>
            <Container maxW="container.lg">
                <Box py='2'>
                    <Heading size="2xl">App title</Heading>
                    <Text fontSize='xl'>Greeting text</Text>
                </Box>
                <Divider/>
                <CardList cards={posts}/>
            </Container>
            <Box textAlign="center" fontSize="xl">
                <Grid minH="100vh" p={3}>
                    <ColorModeSwitcher justifySelf="flex-end"/>
                    <VStack spacing={8}>
                        <Logo h="40vmin" pointerEvents="none"/>
                        <Text>
                            Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
                        </Text>
                        <Link
                            color="teal.500"
                            href="https://chakra-ui.com"
                            fontSize="2xl"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn Chakra
                        </Link>
                    </VStack>
                </Grid>
            </Box>
        </ChakraProvider>
    );
}

export default App;
