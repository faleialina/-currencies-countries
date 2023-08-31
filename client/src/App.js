import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  async function send() {
    const result = await axios.get('https://www.nbrb.by/API/ExRates/Currencies');
    setData(result.data);
    

  }

  useEffect(() => {
    send()
  }, [])


  return (
    <div >
      <Box sx={{ maxWidth: 500 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Pick</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Pick"
          >
            {data.map((elem, index) => { return <MenuItem key={index}>{elem.Cur_Name}</MenuItem> })}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default App;
