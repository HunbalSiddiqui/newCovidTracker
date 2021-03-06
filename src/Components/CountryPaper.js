import React,{useEffect,useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import CountriesDropdown from './CountriesDropdown';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: '100%',
    },
  },
  flex : {
      display : 'flex',
      justifyContent : 'center',
      alignItems : 'center',
      flexFlow:'column',
  },
  smallPaper:{
    width: '50%',
    height: theme.spacing(10),
  },
  DetailsArea:{
    width : '100%',
    height : '100%',
    display : 'flex',
    flexWrap : 'wrap'
  }
}));


export default function CountryPaper() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
            <Fragment>
                <Paper elevation={3} className={classes.flex} >
                    <CountriesDropdown/>
                </Paper>
            </Fragment>
    </div>
  );
}
