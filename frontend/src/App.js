import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import CommandList from './components/containers/CommandList';
import ExecutePanel from './components/containers/ExecutePanel';
import TelloState from './components/containers/TelloStates';
import VideoPlayer from './components/containers/VideoPlayer';

import './App.css';

const useStyles = makeStyles( theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#6e6e6e',
    padding: theme.spacing(1),
    borderRadius: '0.5em',
  },
  paper: {
    padding: theme.spacing(5),
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#212121',
  },
}));

const App = () => {

  const classes = useStyles();

  return (
    <div className="App">
      <Container fixed>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <CommandList />
              </Paper>
            </Grid>
            <Grid item xs={6}>
              <Paper className={classes.paper}>
                <VideoPlayer />
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper className={classes.paper}>
                <TelloState />
              </Paper>
            </Grid>
            <Grid item xs={9}>
              <Paper className={classes.paper}>
                <ExecutePanel />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
