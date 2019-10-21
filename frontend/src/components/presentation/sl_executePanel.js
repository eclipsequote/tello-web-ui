import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  List,
  ListItem,
  ListItemText,
  Avatar,
  ListItemAvatar
} from '@material-ui/core';

const useStyles = makeStyles( theme => ({
  executePanel: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  command: {
    borderRadius: '0.3em',
    backgroundColor: '#c24242',
    margin: theme.spacing(1),
    maxWidth: '8em',
    width: '100'
  }
}));

const ECommands = (props) => {

  const classes = useStyles();

  return(
    <ListItem
      className={classes.command}
      alignItem='flex-end'
    >
      <ListItemAvatar>
        <Avatar button alt='Command' src='' />
      </ListItemAvatar>
      <ListItemText
        primary={props.command}
        style={{ color: '#333333', textAlign: 'center' }}
      >
      </ListItemText>
    </ListItem>
  );
};

const SLExecutePanel = (props) => {

  const classes = useStyles();

  return (
    <List className={classes.executePanel}>
    {
      props.commands.map((cmd, idx) => {
        return (
            <ECommands key={idx} command={cmd} />
        );
      })
    }
    </List>
  );
};

export default SLExecutePanel;
