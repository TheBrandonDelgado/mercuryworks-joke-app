export const styles = {
    header: {
      mt: 3,
      display: 'flex',
      justifyContent: 'space-between',
      borderBottom: '1px lightgray solid',
      py: 5
    },
    jokeButton: {
      borderRadius: 25,
      bgcolor: '#8AC97A',
      textTransform: 'capitalize',
      py: 1.5,
      px: 3,
      ':hover': {
        bgcolor: '#648C5A'
      }
    },
    apiButton: {
      textDecoration: 'underline',
      textTransform: 'none'
    },
    statusBox: {
      mt: 3,
      display: 'flex',
      justifyContent: 'center'
    },
    status: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      my: 10,
      fontSize: 15
    },
    bodyBox: {
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    jokeBox: {
      backgroundImage: `linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
      ), url(/quote-top.png)`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: 100,
      display: 'flex',
      alignItems: 'center'
    },
    joke: {
      fontSize: 25,
      mx: 5
    },
    punchlineButton: {
      borderRadius: 25,
      backgroundColor: '#2B69B1',
      textTransform: 'capitalize',
      py: 1.5,
      px: 3,
      width: '180px',
      alignSelf: 'center',
      my: 8,
      ':hover': {
        bgcolor: '#1D4F8A'
      }
    },
    punchlineBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundImage: `linear-gradient(
        rgba(255, 255, 255, 0.5), 
        rgba(255, 255, 255, 0.5)
      ), url(/quote-bottom.png)`,
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'right',
      height: 100,
      textAlign: 'right'
    }
}