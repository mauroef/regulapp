import {
  Avatar,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { FcGoogle } from 'react-icons/fc'
import { Status } from '../../types/auth'
import Seo from '../seo'

const Login = ({ signIn, status }) => (
  <>
    <Seo
      title='Iniciar Sesión'
      description='Iniciar sesión para ingresar al sistema de registros'
      image=''
    />
    <main>
      {/* TODO: include spinner on waiting */}
      {status === Status.PENDING && (
        <span>Intentando de restaurar sesión...</span>
      )}
      {status === Status.RESOLVED && (
        <VStack spacing={0} align='center'>
          <VStack
            borderRadius='1rem 1rem 0 0'
            bg='rgba(244, 245, 245, 0.75)'
            backdropFilter='saturate(180%) blur(1.25rem)'
            p={12}
          >
            <Center>
              <Avatar bg='purple.500' />
            </Center>
            <Center>
              <Heading>Bievenido al Sistema</Heading>
            </Center>
          </VStack>
          <Center borderRadius='0 0 1rem 1rem' bg='white' p={5}>
            <Button onClick={signIn} leftIcon={<FcGoogle size={'1.5rem'} />}>
              Iniciar sesión con Google
            </Button>
          </Center>
        </VStack>
      )}
    </main>
  </>
)

export default Login
