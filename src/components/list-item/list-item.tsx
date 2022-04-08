/* eslint-disable react/destructuring-assignment */
import { Checkbox } from "../checkbox/checkbox";
import style from "./list-item.module.scss";

export const ListItem = (props: any) => {
  return (
    <li className={style.checkboxItem}>
      <Checkbox label={props.label} isChecked={props.checked} />
    </li>
  );
};
