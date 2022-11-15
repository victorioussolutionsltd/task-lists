import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styled from 'styled-components';
import TransferList from './TransferList';
import { TasksContextType } from './types';

import { TasksContext } from './context/TasksContext';

const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex,
  height: 90%,
  flex-direction: column,
  align-content: space-around
`;

function Container() {
  const { addNewItem, checked } = React.useContext(
    TasksContext
  ) as TasksContextType;

  const [description, setDescription] = useState('Task description');
  const [helperText, setHelperText] = useState('');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value.length > 0) {
      setHelperText('');
    }
    setDescription(event.target.value);
  };

  const addItem = () => {
    if (description === '') {
      setHelperText('Provide the description');
      return;
    }

    if (checked.length > 0) {
      addNewItem({ value: checked[checked.length - 1].value + 1, description });
    } else {
      addNewItem({ value: 0, description });
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
        <Button variant="text" onClick={addItem}>
          Add Task
        </Button>
      </InputWrapper>
      <br />
      <br />

      <TransferList />
    </MainWrapper>
  );
}

export default Container;
