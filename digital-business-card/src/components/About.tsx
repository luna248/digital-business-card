import { makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material';

const useStyles = makeStyles((theme) => ({
    aboutContainer: {
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(3),
      marginRight: theme.spacing(3)
    },
    h3: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: theme.spacing(1),
    },
    paragraph: {
      fontSize: '16px',
      color: '#333',
    },
  }));

export default function About() {
    const classes= useStyles();

    return (
        <div className={classes.aboutContainer}>
          <Typography fontFamily="Inter, sans-serif" marginTop={(theme) => theme.spacing(2)} fontSize={'16px'} fontWeight="bold" color={"#2B283A"}>
                Shreya Shenoy
            </Typography>
          <Typography variant="body1" fontSize={'10.24px'} className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non eros nisl.
            Phasellus lobortis nisi a leo cursus vulputate. Fusce nunc mi, finibus at odio nec,
            semper viverra justo. Nullam scelerisque sapien at dui pellentesque, a fermentum magna efficitur.
            Nulla felis nisi, consequat sed orci in, ornare lacinia tellus
          </Typography>
          <Typography fontFamily="Inter, sans-serif" marginTop={(theme) => theme.spacing(2)} fontSize={'16px'} fontWeight="bold" color={"#2B283A"}>
                Interests
          </Typography>
          <Typography variant="body1" fontSize={'10.24px'} className={classes.paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non eros nisl.
          </Typography>
        </div>
    );
}