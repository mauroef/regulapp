import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  User,
} from 'firebase/auth'
import { auth } from '../config/firebase'
import { Status } from '../types/auth'
import Login from '../components/login'

const provider = new GoogleAuthProvider()

const AuthContext = createContext<any>({})

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [status, setStatus] = useState<Status>(Status.PENDING)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {
        setUser(null)
        setStatus(Status.RESOLVED)
      }
    })
    console.log('cosas auth')
  }, [])

  const signIn = () => {
    return signInWithPopup(auth, provider)
  }

  const signOut = () => {
    return auth.signOut()
  }

  if (!user) return <Login signIn={signIn} status={status} />

  const state = { user }
  const actions = { signIn, signOut }

  return (
    <AuthContext.Provider value={{ state, actions }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext as default, AuthProvider as Provider }
