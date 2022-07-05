import { Box, Center, HStack, Flex, Image } from '@chakra-ui/react'
import useAxios from './Hooks/useAxios';
import './App.css';

function App() {
  const {products}= useAxios()

  return (
    <div className="App">
      <Box>Hello World</Box>
   {products ? 
    products.products.map((item)=>{
      console.log(item)
    })
     :null
   }   
   
    </div>
  );
}

export default App;
