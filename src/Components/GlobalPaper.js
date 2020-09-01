import React,{useEffect,useState,Fragment} from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ProgressBar from './ProgressBar';



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

}));


export default function GlobalPaper() {
  const classes = useStyles();

  const [globalData,setGlobalData] = useState(null);

  useEffect(()=>{
        fetchVirusData()
    },[])

  const fetchVirusData = async() =>{
     const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
     const dataResponse = await apiResponse.json()
     setGlobalData(dataResponse.results[0])
    }

  return (
    <div className={classes.root}>
        {
        globalData ?
        <Fragment>
        <Paper elevation={3}>
            <Typography className="info" variant="h5" gutterBottom>
                {globalData.total_cases}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Total Cases (Globally)
            </Typography>
        </Paper>
        <Paper elevation={3}>
            <Typography className="warning" variant="h5" gutterBottom>
                {globalData.total_affected_countries}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Total affected countries
            </Typography>
        </Paper>
        <Paper elevation={3}>
            <Typography className="success" variant="h5" gutterBottom>
                {globalData.total_recovered}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Recovered Cases (Globally)
            </Typography>
        </Paper>
        <Paper elevation={3}>
            <Typography className="danger" variant="h5" gutterBottom>
                {globalData.total_deaths}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
                Fatalities (Globally)
            </Typography>
        </Paper>
        <Paper elevation={3}>
            <Typography className="processing" variant="h5" gutterBottom>
                {globalData.total_unresolved+globalData.total_active_cases}
            </Typography>
            <Typography  variant="subtitle1" gutterBottom>
                Active Cases (Globally)
            </Typography>
        </Paper>
        </Fragment>
        :
        <ProgressBar/>
        }
        
    </div>
  );
}
