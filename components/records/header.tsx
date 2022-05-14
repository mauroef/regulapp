import { SearchIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  Input,
  InputGroup,
  InputLeftElement,
  Spacer,
} from '@chakra-ui/react'
import { FC, MouseEventHandler } from 'react'

interface RecordsHeaderProps {
  add: MouseEventHandler
}

const RecordsHeader: FC<RecordsHeaderProps> = ({ add }) => {
  return (
    <Flex
      w={'100%'}
      p={'1rem'}
      borderTopRadius={'1rem'}
      bg='rgba(244, 245, 245, 0.75)'
      backdropFilter='saturate(180%) blur(1.25rem)'
    >
      <Box flex={'1'} mr={'1rem'}>
        <InputGroup>
          <InputLeftElement
            pointerEvents='none'
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color='gray.400' />}
          />
          <Input placeholder={'Buscar registro'} bgColor={'white'} />
        </InputGroup>
      </Box>
      <Box>
        <Button onClick={add} colorScheme={'green'}>Agregar</Button>
      </Box>
    </Flex>
  )
}

export default RecordsHeader
