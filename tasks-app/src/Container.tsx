import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import styled from 'styled-components';
import TransferList from './components/TransferList';
import { TasksContextType } from './types';

import { TasksContext } from './context/TasksContext';

const InputWrapper = styled.div`
  display: flex;
  padding: 25px;
  gap: 25px;
  justify-content: center;
`;

const MainWrapper = styled.div`
  display: flex,
  height: 90%,
  flex-direction: column,
  align-content: space-around
`;

function Container() {
  const { addNewItem, left, right } = React.useContext(
    TasksContext
  ) as TasksContextType;

  const [description, setDescription] = useState('Task');
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

    const noOfAllItems = left.length + right.length;

    addNewItem({ value: noOfAllItems, description });
  };

  return (
    <MainWrapper>
      <InputWrapper>
        <TextField
          id="outlined-required"
          label="Description"
          variant="outlined"
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
