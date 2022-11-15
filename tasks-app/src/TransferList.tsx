import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import CustomList from './CustomList';
import { TasksContextType } from './types';
import { TasksContext } from './context/TasksContext';

export default function TransferList() {

  const { checked, setChecked, right, left, handleCheckedLeft, handleCheckedRight, rightChecked, leftChecked } = React.useContext(TasksContext) as TasksContextType;

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <CustomList
          title="Pending"
          items={left}
          checked={checked}
          onCheckedChange={(items) => setChecked([...items])}
        />
      </Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>
        <CustomList
          title="Completed"
          items={right}
          checked={checked}
          onCheckedChange={(items) => setChecked([...items])}
        />
      </Grid>
    </Grid>
  );
}
