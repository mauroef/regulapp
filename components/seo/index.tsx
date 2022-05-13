import { FC } from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

interface SeoProps {
  title: string
  description: string
  image: string
}

const Seo: FC<SeoProps> = ({ title = '', description = '', image = '' }) => {
  return (
    <Head>
      <title>{title} | RegulApp</title>
      {description !== '' ?? <meta name='description' content={description} />}
      <meta name='author' content={'mauroef'} />
      <meta name='og:title' content={title} />
      {description !== '' ?? (
        <meta name='og:description' content={description} />
      )}
      {image !== '' ?? <meta name='og:image' content={image} />}
      <meta name='og:type' content={'website'} />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Seo
