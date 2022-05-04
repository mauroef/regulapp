import { useContext } from 'react'
import AuthContext from '../context/authContext'

export function useAuth() {
  const {
    state: { user },
    actions: { signOut },
  } = useContext(AuthContext)

  return [user, signOut]
}
