import React from 'react';
import { makeStyles } from '@material-ui/core';
import { IconButton } from '@mui/material';
import { Twitter, GitHub, LogoDev } from '@mui/icons-material';

const useStyles = makeStyles((theme) => ({
  socialMediaBar: {
    display: 'flex',
    width: '94%',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#E0E2E2', 
    padding: theme.spacing(1), 
    borderRadius: '0 0 20px 20px'
  },
  icon: {
    color: '#8C8C8C', // Grey icon color
    fontSize: 28, // Adjust icon size as needed
    margin: theme.spacing(0, 1), // Adjust spacing between icons as needed
  },
}));

export default function SocialLogoBar() {
  const classes = useStyles();

  return (
    <div className={classes.socialMediaBar}>
      <a href="https://twitter.com/scatterbrainblah248">
        <IconButton className={classes.icon}>
            <Twitter />
        </IconButton>
      </a>
      <a href="https://github.com/luna248">
        <IconButton className={classes.icon}>
            <GitHub />
        </IconButton>
      </a>
      <a href="https://dev.to/shreyashenoy">
        <IconButton className={classes.icon}>
            <LogoDev />
        </IconButton>
      </a>
    </div>
  );
}
