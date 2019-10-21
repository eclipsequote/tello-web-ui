import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import AddBoxOutlinedIcon from '@material-ui/icons/AddBoxOutlined';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const useStyles = makeStyles( theme => ({
  command: {
    borderRadius: '0.3em',
    backgroundColor: '#bde3ff',
    margin: theme.spacing(1),
    maxWidth: '16em',
    width: '100',
  },
}));

const SLCommand = (props) => {

  const classes = useStyles();
  console.log(`from SLCommand: ${props.commandName}`);
  return (
    <div className={classes.command}>
      <ListItem
        button
        className={classes.commandInfo}
        alignItem='flex-end'
      >
        <ListItemAvatar>
          <Avatar button alt='Command' src='' />
        </ListItemAvatar>
        <ListItemText
          primary={props.commandName}
          style={{ color: '#333333', textAlign: 'center' }}
        >
        </ListItemText>
        <ListItemIcon>
          <AddBoxOutlinedIcon style={{ fontSize: '3em', padding: '0em', fontWeight: 'bold'}}/>
        </ListItemIcon>
      </ListItem>
    </div>

  );
}

export default SLCommand;
