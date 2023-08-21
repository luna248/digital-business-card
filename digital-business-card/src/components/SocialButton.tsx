import Button from '@mui/material/Button';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: theme.spacing(2.75),
    marginBottom: theme.spacing(1.5)
  },
  emailButton: {
    color: '#007ACC',
    borderColor: '#007ACC',
    backgroundColor: '#ffffff',
    marginRight: theme.spacing(1),
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)', 
  },
  linkedinButton: {
    color: '#007ACC',
    borderColor: '#007ACC',
    marginLeft: theme.spacing(1), 
    '&:hover': {
      backgroundColor: '#ffffff',
      color: '#007ACC',
    },
  },
}));

export default function SocialButton() {
  const classes = useStyles();

  return (
    <div className={classes.buttonContainer}>
      <Button variant="contained" href="mailto:shreya.shenoy17@gmail.com" className={classes.emailButton}>
        Email
      </Button>
      <Button variant="contained" href="https://www.linkedin.com/in/shreya-shenoy" className={classes.linkedinButton}>
        LinkedIn
      </Button>
    </div>
  );
}
