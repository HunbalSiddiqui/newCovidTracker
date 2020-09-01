/* eslint-disable no-use-before-define */
import React,{Fragment,useState,useEffect} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchBtn from './SearchBtn';
import ProgressBar from './ProgressBar';


export default function CountriesDropdown() {
 

  const [selectedCountry,setCountry] = useState(null)
  const [allCountryNames,setAllCountryNames] = useState(null)
  useEffect(()=>{
    getCountryNames()
  },[])
  const getCountryNames = async () => {
    const countryNames = []
	const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
	const dataResponse = await apiResponse.json()
	for (let index = 0; index < dataResponse.countryitems.length; index++) {
	  var object = dataResponse.countryitems[index]
		for (const key in object) {
            countryNames.push(object[key])
            if(countryNames.length===181)
            {break;}//because api has "ok" at index 182
		}
    }
    setAllCountryNames(countryNames)
}
  return (
    allCountryNames?  <Fragment>
          <Autocomplete style={{ width: 300 }}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allCountryNames.map((option) => option.title)}
        onInputChange={(e, newInputValue)=>{setCountry(newInputValue)}}

        renderInput={(params) => (
          <TextField
            {...params}
            label="Search by country name"
            margin="normal"
            variant="outlined"
            InputProps={{ ...params.InputProps, type: 'search' }}
          />
        )}
      />
    {
        selectedCountry ?
            <SearchBtn selectedCountry={selectedCountry}/>
        :
            null
    }
    </Fragment>
    :
    <ProgressBar/>
  );
}



