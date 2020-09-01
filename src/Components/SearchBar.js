/* eslint-disable no-use-before-define */
import React,{useState} from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { countryList } from './countryList';
import SearchBtn from './SearchBtn';

export default function SearchBar() {
    const [country,setCountry] = useState(null)
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        autoSelect
        options={countryList.map((option) => option)}
        onChange={(e)=>{console.log(e.target.value)}}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
      {/* {console.log(country)} */}
    {
        country ? 
        <SearchBtn/>
        :
        null
    }
      
    </div>
  );
}
