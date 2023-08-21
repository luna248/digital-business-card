import headshot from '../images/Profile.jpg';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    imageContainer: {
      position: 'relative',
      display: 'flex',
      width: '100%',
      height: '35%',
      overflow: 'hidden'
    },
    
    profilePicture: {
      width: '100%',
      height: '100%',
      borderRadius: '20px 20px 0 0'
    },
  }));

export default function ProfilePicture(){
    const classes = useStyles();

    return(
        <div className={classes.imageContainer}>
            <img
              className={classes.profilePicture}
              alt="Headshot"
              src={headshot}
            />
        </div>
    )
}