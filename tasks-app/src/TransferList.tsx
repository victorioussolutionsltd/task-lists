import React, {useEffect} from 'react';
import Grid from '@mui/material/Grid';
import CustomList from './CustomList';
import Button from '@mui/material/Button';
import { intersection, not } from './helpers/intersection';
import { ListItemType } from './types'

export default function TransferList({newItem} : {newItem: ListItemType | null}) {
  const [checked, setChecked] = React.useState<readonly ListItemType[]>([]);
  const [left, setLeft] = React.useState<readonly ListItemType[]>([]);
  const [right, setRight] = React.useState<readonly ListItemType[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);


  useEffect(() => {
    if(newItem){
      const newLeft = [...left, newItem]
      setLeft(newLeft)
    }
  }, [newItem])

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>
        <CustomList
          title='Pending'
          items={left}
          checked={checked}
          onCheckedChange={(items) => setChecked(items)} />
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
          title='Completed'
          items={right}
          checked={checked}
          onCheckedChange={(items) => setChecked(items)} />
      </Grid>
    </Grid>
  );
}
