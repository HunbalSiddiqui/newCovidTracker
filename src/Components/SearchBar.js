/* eslint-disable no-use-before-define */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { countryList } from './countryList';

export default function SearchBar() {
  return (
    <div style={{ width: 300 }}>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        options={countryList.map((option) => option)}
        renderInput={(params) => (
          <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
        )}
      />
    </div>
  );
}
