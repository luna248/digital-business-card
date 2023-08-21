import { makeStyles } from '@material-ui/core'
import { Typography } from '@mui/material'

const useStyles = makeStyles(() => ({
    introContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
    }
}))


export default function Introduction() {
    const classes= useStyles();

    return (
        <div className={classes.introContainer}>
            <Typography fontFamily="Inter, sans-serif" marginTop={(theme) => theme.spacing(2)} fontSize={'25px'} color={"#2B283A"}>
                Shreya Shenoy
            </Typography>
            <Typography fontFamily="Inter, sans-serif" marginTop={(theme) => theme.spacing(0)}  fontSize={'12.8px'} color={"#F47D27"} flexWrap={'wrap'}>
                Full Stack Developer
            </Typography>
            <Typography fontFamily="Inter, sans-serif" marginTop={(theme) => theme.spacing(0.5)}  fontSize={'10.24px'} color={"#4A4E74"} flexWrap={'wrap'}>
                shreyashenoy.com
            </Typography>
        </div>
    );
}