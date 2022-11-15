import React, { useState, useMemo } from 'react';
import { intersection, not } from '../helpers/intersection';
import { ListItemType, TasksContextType } from '../types';

export const TasksContext = React.createContext<TasksContextType | null>(null);

function TasksProvider({ children }: { children: React.ReactNode }) {
  const [checked, setChecked] = useState<ListItemType[]>([]);
  const [left, setLeft] = useState<ListItemType[]>([]);
  const [right, setRight] = useState<ListItemType[]>([]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const addNewItem = (newItem: ListItemType) => {
    if (newItem) {
      const newLeft = [...left, newItem];
      setLeft(newLeft);
    }
  };

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

  const globalContextValue = useMemo(
    () => ({
      addNewItem,
      checked,
      setChecked,
      handleCheckedRight,
      handleCheckedLeft,
      right,
      left,
      rightChecked,
      leftChecked,
    }),
    [
      addNewItem,
      checked,
      setChecked,
      handleCheckedRight,
      handleCheckedLeft,
      right,
      left,
      rightChecked,
      leftChecked,
    ]
  );

  return (
    <TasksContext.Provider value={globalContextValue}>
      {children}
    </TasksContext.Provider>
  );
}

export default TasksProvider;
