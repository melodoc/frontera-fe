/* eslint-disable react/destructuring-assignment */
import { ListItem } from "../list-item/list-item";
import style from "./list.module.scss";

export const List = (props: any) => {
  return (
    <ul className={style.ListItem}>
      {props.labels.map((value) => (
        <ListItem
          key={value.name}
          label={value.name}
          isChecked={value.checked}
        />
      ))}
    </ul>
  );
};
