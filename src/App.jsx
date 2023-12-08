import './App.css'
import IndexPage from './Header'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './Header'

export default function App() {
 return (
  <ChakraProvider>
    <Header/>
  </ChakraProvider>
 )
}
