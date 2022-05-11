import { Status } from '../../types/auth'

const LoginScreen = ({ signIn, status }) => (
  <div>
    {/* TODO: include spinner on waiting */}
    {status === Status.PENDING && (
      <span>Intentando de restaurar sesión...</span>
    )}
    {status === Status.RESOLVED && (
      <button onClick={signIn}>Iniciar sesión con Google</button>
    )}
  </div>
)

export default LoginScreen
