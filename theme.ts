const theme = {
  styles: {
    global: {
      body: {
        bg: 'gray.100',
        //bgImage: 'url(./background.svg)',
        bgImage: 'url(./background-optimized.jpeg)',
        bgRepeat: 'no-repeat',
        bgSize: 'cover',
        bgPosition: 'center',
        bgAttachment: 'fixed',
        nav: {
          pos: 'fixed',
          top: '0',
          w: 'calc(100% - 1rem)',
          borderRadius: '1rem',
          bg: 'rgba(244, 245, 245, 0.75)',
          backdropFilter: 'saturate(180%) blur(1.25rem)',
          m: '.5rem',
          zIndex: 1,
        },
        main: {
          minH: 'calc(100vh - 11.5rem)',
          minW: '20rem',
          m: '7rem 1rem 0 1rem',
          '@media (min-width: 40rem)': {
            mx: 'auto',
            maxW: '75rem',
          },
        },
      },
    },
  },
}

export default theme
