import { FC } from 'react'
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FaPlus, FaSave } from 'react-icons/fa'
import { Status } from '../../types/db'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Campo requerido'
  } else if (values.name.length > 15) {
    errors.name = 'Máximo permitido de 15 letras.'
  }

  console.log({ errors })

  return errors
}

const RecordsModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const formik = useFormik({
    initialValues: {
      name: '',
      // status: '',
      // dateOne: '',
      // dateTwo: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  // const handleSubmit = () => {
  //   onClose()
  // }

  return (
    <>
      <Button onClick={onOpen} colorScheme={'green'} rightIcon={<FaPlus />}>
        Nuevo
      </Button>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        motionPreset='slideInBottom'
        scrollBehavior={'inside'}
        size='lg'
        isCentered
      >
        <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(0.5rem)' />
        <ModalContent>
          <ModalHeader>Nuevo Registro</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form id='new-record' onSubmit={formik.handleSubmit}>
              <FormControl
                isInvalid={formik.errors.name && formik.touched.name}
              >
                <FormLabel htmlFor='name'>Nombre</FormLabel>
                <Input
                  id='name'
                  type='text'
                  placeholder='Nombre del registro...'
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
                {formik.errors.name ? (
                  <FormErrorMessage>{formik.errors.name}</FormErrorMessage>
                ) : null}
              </FormControl>
              <FormControl mt={'1rem'}>
                <FormLabel htmlFor='status'>Estado</FormLabel>
                <Select
                  id='status'
                  placeholder='Estado del registro'
                  // onChange={formik.handleChange}
                  // value={formik.values.status}
                >
                  <option>{Status.PROJECT_RECORD}</option>
                  <option>{Status.IN_EVALUATION}</option>
                </Select>
              </FormControl>
              <FormControl mt={'1rem'}>
                <FormLabel htmlFor='dateOne'>Fecha 1</FormLabel>
                <Input
                  id='dateOne'
                  type='datetime-local'
                  // onChange={formik.handleChange}
                  // value={formik.values.dateOne}
                />
              </FormControl>
              <FormControl mt={'1rem'}>
                <FormLabel htmlFor='dateOne'>Fecha 2</FormLabel>
                <Input
                  id='dateTwo'
                  type='datetime-local'
                  // onChange={formik.handleChange}
                  // value={formik.values.dateTwo}
                />
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button
              type='submit'
              colorScheme='blue'
              form='new-record'
              leftIcon={<FaSave />} /* onClick={handleSubmit} */
            >
              Guardar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default RecordsModal
