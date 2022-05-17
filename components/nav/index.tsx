import { FC } from 'react'
import Image from 'next/image'
import { useAuth } from '../../hooks/useAuth'
import { User } from '../../types/auth'
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Spacer,
  Text,
} from '@chakra-ui/react'

const Nav: FC = () => {
  const [auth, signOut] = useAuth()

  const data: User = {
    id: auth.uid,
    email: auth.email,
    name: auth.displayName,
    image: auth.photoURL,
    signOut,
  }

  return (
    <Flex
      as='nav'
      minWidth='max-content'
      alignItems='center'
      gap='2'
      p={'.5rem 1rem'}
      border={'0.5px solid #F4F5F5'}
      boxShadow={'0 .25rem .25rem rgba(0, 0, 0, .25)'}
    >
      <Box p='2'>
        <Heading size='md'>RegulApp</Heading>
      </Box>
      <Spacer />
      <Image
        loader={() => data.image + '?w=30'}
        src={data.image}
        width={48}
        height={48}
        alt='profile'
        referrerPolicy={'no-referrer'}
        style={{ borderRadius: '50%' }}
      />
      <Text>Hola, {data.name}</Text>
      <Divider orientation='vertical' h='3rem' borderColor='gray.400' />
      <Button
        onClick={() => {
          signOut()
        }}
        colorScheme='twitter'
      >
        Cerrar
      </Button>
    </Flex>
  )
}

export default Nav
