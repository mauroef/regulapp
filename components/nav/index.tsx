import { FC } from 'react'
import Image from 'next/image'
import { useAuth } from '../../hooks/useAuth'
import { User } from '../../types/auth'

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
    <nav>
      <span>RegulApp</span>
      <Image
        loader={() => data.image + '?w=30'}
        src={data.image}
        width={30}
        height={30}
        alt='profile'
        referrerPolicy={'no-referrer'}
      />
      <span>{data.name}</span>
      <button
        onClick={() => {
          signOut()
        }}
      >
        Cerrar
      </button>
    </nav>
  )
}

export default Nav
