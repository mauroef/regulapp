import { Center, Icon, Text } from '@chakra-ui/react'
import { FaHeart } from 'react-icons/fa'

const Footer = () => (
  <Center
    as='footer'
    mt={'1rem'}
    py={'1rem'}
    borderTopRadius={'1rem'}
    // bgColor={'white'}
    background={'rgba(244, 245, 245, 0.75)'}
    backdropFilter={'saturate(180%) blur(1.25rem)'}
  >
    <Text>
      Developed with <Icon as={FaHeart} color='red.500' /> by Mauro Ezequiel
      Frete &copy; {new Date().getFullYear()}
    </Text>
  </Center>
)

export default Footer
