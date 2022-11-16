import React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import { numberOfChecked } from '../helpers/intersection';
import { ListItemType } from '../types';

function CustomList({
  title,
  items,
  checked,
  onCheckedChange,
}: {
  title: React.ReactNode;
  items: readonly ListItemType[];
  checked: readonly ListItemType[];
  onCheckedChange: (items: readonly ListItemType[]) => void;
}) {
  const onToggle = (item: ListItemType) => {
    const currentIndex = checked.indexOf(item);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(item);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    onCheckedChange(newChecked);
  };

  return (
    <Card>
      <CardHeader
        sx={{ px: 2, py: 1 }}
        title={title}
        subheader={`${numberOfChecked(checked, items)}/${
          items.length
        } selected`}
      />
      <Divider />
      <List
        sx={{
          width: 200,
          height: 230,
          bgcolor: 'background.paper',
          overflow: 'auto',
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((item: ListItemType) => {
          const { value, description } = item;
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={() => {
                onToggle(item);
              }}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(item) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText
                id={labelId}
                primary={`${description} ${value + 1}`}
              />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );
}
export default CustomList;
