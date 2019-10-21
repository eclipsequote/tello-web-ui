import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Command from '../containers/Command';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles( theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    // backgroundColor: '#424242',
    // borderRadius: '0.3em'
  },
  inline: {
    display: 'inline',
  },
}));

const SLCommandList = (props) => {

  const classes = useStyles();
  console.log(props);
  return(
    <List className={classes.root}>
    {
      props.commands.map((cmd, idx) => {
        return(
          <div key={idx}>
            <Command commandName={cmd}/>
            <Divider variant='inset' component='li' />
          </div>
        )
      })
    }
    </List>
  );
}

export default SLCommandList;
