import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        height: theme.spacing(16),
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
      flexWrap : 'wrap',
      justifyContent : 'center',
      alignItems : 'center',
    }
  }));
  


export default function CountryData(props) {
    const classes = useStyles();
    var {total_active_cases,total_deaths,total_cases,
        total_new_cases_today,total_new_deaths_today,
    total_recovered,total_serious_cases,total_unresolved} = props.countryData
    return (
        <Paper elevation={3} className={classes.DetailsArea}>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_active_cases}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total Active Cases
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_deaths}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total Deaths
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_cases}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total Cases
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_new_cases_today}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total New Cases Today
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_new_deaths_today}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total New Deaths Today
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_serious_cases}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total Serious Cases
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_recovered}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total Recovered
          </Typography>
        </Paper>
        <Paper className={classes.smallPaper}>
          <Typography className="info" variant="h5" gutterBottom>
              {total_unresolved}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
              Total Unresolved Cases
          </Typography>
        </Paper>
      </Paper>
    )
}
