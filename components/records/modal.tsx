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
  Text,
  Input,
  Select,
  Textarea,
  HStack,
} from '@chakra-ui/react'
import { useFormik } from 'formik'
import { FaPlus, FaSave } from 'react-icons/fa'
import { Status } from '../../types/db'

const validate = (values) => {
  const errors = {}
  if (!values.name) {
    errors.name = 'Campo Nombre requerido.'
  } else if (values.name.length > 15) {
    errors.name = 'Máximo permitido de 15 caracteres.'
  } else if (values.name.length < 4) {
    errors.name = 'Mínimo permitido de 4 caracteres.'
  }
  if (!values.status) {
    errors.status = 'Campo Estado requerido.'
  }
  if (!values.warningDate) {
    errors.warningDate = 'Campo Alerta requerido.'
  }
  if (!values.expirationDate) {
    errors.expirationDate = 'Campo Vencimiento requerido.'
  }
  if (values.additionalInformation.length > 50) {
    errors.additionalInformation = 'Máximo permitido de 50 caracteres.'
  }

  console.log({ errors })

  return errors
}

const RecordsModal: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const formik = useFormik({
    initialValues: {
      name: '',
      status: '',
      warningDate: '',
      expirationDate: '',
      additionalInformation: '',
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
              <FormControl mt={'1rem'} isInvalid={formik.errors.status}>
                <FormLabel htmlFor='status'>Estado</FormLabel>
                <Select
                  id='status'
                  placeholder='Seleccione...'
                  onChange={formik.handleChange}
                  value={formik.values.status}
                  isInvalid={formik.errors.status}
                >
                  <option>{Status.PROJECT_RECORD}</option>
                  <option>{Status.IN_EVALUATION}</option>
                </Select>
                {formik.errors.status ? (
                  <FormErrorMessage>{formik.errors.status}</FormErrorMessage>
                ) : null}
              </FormControl>
              <HStack mt={'1rem'}>
                <FormControl isInvalid={formik.errors.warningDate}>
                  <FormLabel htmlFor='warningDate'>Aviso</FormLabel>
                  <Input
                    id='warningDate'
                    type='date'
                    onChange={formik.handleChange}
                    value={formik.values.warningDate}
                    isInvalid={formik.errors.warningDate}
                  />
                  {formik.errors.warningDate ? (
                    <FormErrorMessage>
                      {formik.errors.warningDate}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
                <FormControl
                  mt={'1rem'}
                  isInvalid={formik.errors.expirationDate}
                >
                  <FormLabel htmlFor='expirationDate'>Vencimiento</FormLabel>
                  <Input
                    id='expirationDate'
                    type='date'
                    onChange={formik.handleChange}
                    value={formik.values.expirationDate}
                    isInvalid={formik.errors.expirationDate}
                  />
                  {formik.errors.expirationDate ? (
                    <FormErrorMessage>
                      {formik.errors.expirationDate}
                    </FormErrorMessage>
                  ) : null}
                </FormControl>
              </HStack>
              <FormControl mt={'1rem'} isInvalid={formik.errors.aditionalInformation}>
                <FormLabel htmlFor='additionalInformation'>
                  Información adicional
                </FormLabel>
                <Textarea
                  onChange={formik.handleChange}
                  value={formik.values.aditionalInformation}
                  id='additionalInformation'
                  placeholder='Información adicional...'
                  size='sm'
                />
                {formik.errors.aditionalInformation ? (
                  <FormErrorMessage>
                    {formik.errors.aditionalInformation}
                  </FormErrorMessage>
                ) : null}
              </FormControl>
            </form>
            //FIXME: validacion textarea y side effects
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
