import { Icon } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => (
  <footer>
    <p>
      Developed with <Icon as={FaHeart} color='red.500' /> by Mauro Ezequiel
      Frete &copy; {new Date().getFullYear()}
    </p>
  </footer>
)

export default Footer
