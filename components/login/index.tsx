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
        <button onClick={signIn}>Iniciar sesión con Google</button>
      )}
    </main>
  </>
)

export default Login
