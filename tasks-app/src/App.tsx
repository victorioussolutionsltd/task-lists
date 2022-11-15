import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Grid, Button } from '@mui/material';
import TransferList from './TransferList';
import { ListItemType } from './types';

function App() {
  const [description, setDescription] = useState('Task description');
  const [item, setItem] = useState<ListItemType | null>(null);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(event.target.value);
  };

  const addNewItem = () => {
    if (item) {
      setItem({ value: item.value + 1, description });
    } else {
      setItem({ value: 0, description });
    }
  };

  return (
    <Grid container spacing={1} justifyContent="center" alignItems="center">
      <Grid item>
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={description}
          onChange={handleChange}
        />
        <Button variant="text" onClick={addNewItem}>
          Add Task
        </Button>
      </Grid>
      <Grid>
        <TransferList newItem={item} />
      </Grid>
    </Grid>
  );
}

export default App;
