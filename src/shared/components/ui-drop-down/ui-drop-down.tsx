import { useState } from 'react';

import style from './ui-drop-down.module.scss';

interface UIDropDownProps {
  items: Array<IDropDownItem>;
  defaultTitle: string;
  onSelected: (item: IDropDownItem) => void;
}

export interface IDropDownItem {
  id: string;
  value: string;
  label: string;
  isSelected: boolean;
}

export const UIDropDown = ({ items, defaultTitle, onSelected }: UIDropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState(defaultTitle);

  const handleOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setIsOpen((previousState) => !previousState);
  };

  // TODO: Optimize if needed in the future
  const handleItemClick = (event: React.MouseEvent<HTMLButtonElement>, item: IDropDownItem) => {
    event.preventDefault();
    setIsOpen(false);
    onSelected(item);
    setTitle(item.label);
  };

  return (
    <div className={style.menu}>
      {!isOpen && (
        <button className={style.menu__button} onClick={handleOpenMenu}>
          {title}
        </button>
      )}
      {isOpen && (
        <ul className={style.menu__dropdown_list}>
          {items.map((item) => {
            return (
              <li key={item.id}>
                <button
                  className={style.menu__dropdown_list_item}
                  onClick={(event) => {
                    handleItemClick(event, item);
                  }}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
