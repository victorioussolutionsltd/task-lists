export type ListItemType = {
  value: number;
  description: string;
};

export type TasksContextType = {
  addNewItem: (item: ListItemType) => void;
  checked: ListItemType[];
  setChecked: (items: ListItemType[]) => void;
  handleCheckedRight: () => void;
  handleCheckedLeft: () => void;
  right: ListItemType[];
  left: ListItemType[];
  rightChecked: ListItemType[];
  leftChecked: ListItemType[];
};
