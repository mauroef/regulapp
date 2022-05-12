import { FC, ReactNode } from 'react'
import Nav from '../nav'
import Main from '../main'
import Footer from '../footer'

interface LayoutProps {
  children: ReactNode
}
const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <Main>{children}</Main>
      <Footer />
    </>
  )
}

export default Layout
