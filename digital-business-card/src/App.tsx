import About from './components/About';
import SocialButton from './components/SocialButton';
import { makeStyles } from '@material-ui/core'
import ProfilePicture from './components/ProfilePicture';
import Introduction from './components/Introduction';
import SocialLogoBar from './components/SocialLogoBar';

const useStyles = makeStyles(() => ({
  background: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    width: '100%',
    maxWidth: '300px',
    height: '80%',
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '20px'
  },
}));

function App() {
  
  const classes = useStyles();

  return (
    <>
      <div className={classes.background}>
        <ProfilePicture />

        <Introduction />

        <SocialButton />

        <About />

        <SocialLogoBar />
      </div>
    </>
  )
}

export default App
