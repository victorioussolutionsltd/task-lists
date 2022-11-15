import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styled from 'styled-components'
import TransferList from './TransferList';
import { ListItemType } from './types';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center
`;

const MainWrapper = styled.div`
  display: flex,
  height: 90%,
  flex-direction: column,
  align-content: space-around
`

function App() {
  const [description, setDescription] = useState('Task description');
  const [item, setItem] = useState<ListItemType | null>(null);
  const [helperText, setHelperText] = useState('')
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if(event.target.value.length > 0) { setHelperText('') }
    setDescription(event.target.value);
  };

  const addNewItem = () => {
    if(description === ''){
      setHelperText('Provide the description')
      return;
    }

    if (item) {
      setItem({ value: item.value + 1, description });
    } else {
      setItem({ value: 0, description });
    }
  };

  return (
    <MainWrapper>
      <InputWrapper>
          <TextField
            id="filled-basic"
            label="Filled"
            variant="filled"
            value={description}
            onChange={handleChange}
            helperText={helperText}
          />
          <Button variant="text" onClick={addNewItem}>
            Add Task
          </Button>
      </InputWrapper>
      <br />
      <br />

        <TransferList newItem={item} />
    </MainWrapper>
  );
}

export default App;
