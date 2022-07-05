import { Box, Center, HStack, Flex } from '@chakra-ui/react'
import useAxios from './Hooks/useAxios';
import './App.css';

function App() {
  const {personagens}= useAxios()

  console.log(personagens[2].info)
  return (
    <div className="App">
      <Box>Hello World</Box>
   {personagens ? 
    personagens.map((char)=>(
      <Flex   m="20">
      <HStack>
        <Center>
          <Box>{char.id}</Box>
          <Box>{char.about} </Box>
          <Box>{char.about} </Box>
        </Center>
      </HStack>
    </Flex>
    )):null
   }   
   
    </div>
  );
}

export default App;
