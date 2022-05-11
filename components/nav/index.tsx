import { FC } from 'react'
import Image from 'next/image'
import { User } from '../../types/auth'

interface NavProps {
  data: User
}

const Nav: FC<NavProps> = ({ data }) => {
  const { name, image, signOut } = data

  return (
    <nav>
      <span>RegulApp</span>
      <Image
        loader={() => image + '?w=30'}
        src={image}
        width={30}
        height={30}
        alt='profile'
        referrerPolicy={'no-referrer'}
      />
      <span>{name}</span>
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
