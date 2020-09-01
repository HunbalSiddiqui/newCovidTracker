import React,{useState,Fragment} from 'react';
import Button from '@material-ui/core/Button';
import CountryData from './CountryData';

export default function SearchBtn(props) {


    var [countryData,setCountryData] = useState(null)
  const fetchDetails = async() =>{
    const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
    const dataResponse = await apiResponse.json()
    for (let index = 0; index < dataResponse.countryitems.length; index++) {
      var object = dataResponse.countryitems[index]
        for (const key in object) {
          if (object[key].title===props.selectedCountry) {
            setCountryData(object[key]);
          }
        }
    }
  }


  return (
    <Fragment>
    <Button variant="contained" color="primary" onClick={()=>{fetchDetails()}}>
      Fetch Stats
    </Button>
    {
      countryData ? 
      <CountryData countryData={countryData}/>
      :
      null
    }
    </Fragment>
  );
}
