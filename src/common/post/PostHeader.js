import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ProfileIcon from '../../common/profile/ProfileIcon';

const useStyles = makeStyles({
    header: {
        /*margin: 'auto',*/
        width: '100%',
        marginLeft: '0',
        paddingTop: '1%',
        paddingRight: '1%',
        paddingBottom: '1%'
    },
    textStrong: {
        fontWeight: 750
    },
    textLite: {
        fontWeight: 500
    }

});

/*const covertDate = (x) => {
    let date = new Date(x);
    let dd = date.getDate();
    let mm = date.getMonth()+1;
    dd = (dd < 10) ? ("0"+dd) : dd;
    mm = (mm < 10) ? ("0"+mm) : mm;
    return dd + '/' +  mm + '/' + date.getFullYear() 
    + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
};*/

// Post header component
export default function PostHeader(props) {
    const classes = useStyles();
    return (
        <Box display="flex" flexDirection="row" alignItems="center" justifyContent="flex-start" className={"post-user " + classes.header}>
            <ProfileIcon type="avatarOnly" />
            <Box display="flex" flexDirection="column" alignItems="center" justifyContent="flex-start">
                <Typography className={classes.textStrong} variant="body1">{props.postUser}</Typography>
                {(!props.includeTimestamp) ? "" : <Typography className={classes.textLite} variant="subtitle2">{props.postedTime}</Typography>}
            </Box>
        </Box>
    );

}
