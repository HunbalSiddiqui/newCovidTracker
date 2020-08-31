import React,{useEffect,useState,Fragment} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import SearchBar from './SearchBar';
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


export default function CountryPaper() {
  const classes = useStyles();

  useEffect(()=>{
    fetchCountriesData()
},[])

    var [countries,setCountires] = useState(null)
  const fetchCountriesData = async() =>{
    const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
    const dataResponse = await apiResponse.json()
    // console.log(dataResponse.countryitems[0])
    setCountires(dataResponse.countryitems[0])
  }
  return (
    <div className={classes.root}>
        {
            countries ? 
            <Fragment>
                <Paper elevation={3}>
                    <SearchBar/>
                  </Paper>
                <Paper elevation={3} />
            </Fragment>
      :
      null
    }

    </div>
  );
}
