import { ChakraProvider } from '@chakra-ui/react'
import "leaflet/dist/leaflet.css";
import "../pages/app.css";
import "../pages/global.css"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )   
}
