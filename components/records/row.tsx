import { FC, MouseEventHandler } from 'react'
import { Tr, Td, IconButton, Badge } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'
import { Status } from '../../types/db'

interface RecordRowProps {
  name: string
  status: Status
  createdAt: Date
  remove: MouseEventHandler<HTMLButtonElement>
}

const RecordRow: FC<RecordRowProps> = ({ name, status, createdAt, remove }) => {
  return (
    <Tr>
      <Td>{createdAt.toLocaleString()}</Td>
      <Td>{name}</Td>
      <Td>
        <Badge>{status}</Badge>
      </Td>
      <Td>
        <IconButton
          onClick={remove}
          color='white'
          bg='red.500'
          _hover={{
            bg: 'red.400',
            transform: 'scale(1.2)',
            transition: 'transform 0.5s ease',
          }}
          _active={{
            bg: 'red.400',
          }}
          _focus={{
            boxShadow: '0 0 0 3px #E53E3E',
          }}
          aria-label='Remove'
          icon={<DeleteIcon />}
        />
      </Td>
    </Tr>
  )
}

export default RecordRow
