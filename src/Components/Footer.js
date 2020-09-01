import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {GitHub } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    flexFlow:'column'
  },
  subtitle: {
    flexGrow: 1,
    fontSize:10
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Toolbar className={classes.root}>
          <h1 className={classes.subtitle}>
          For Source Code <a href="https://github.com/HunbalSiddiqui/newCovidTracker" target="_blank" style={{color:'white'}}> 
        <GitHub></GitHub>
          </a>
          </h1>

          <h1 className={classes.subtitle}>
          COPYRIGHT © 2020 M.HUNBAL SIDDIQUI - ALL RIGHTS RESERVED.
          </h1>
        </Toolbar>
      </AppBar>
  );
}
