/* eslint-disable react/no-access-state-in-setstate */
import React from 'react';
import i18next from 'i18next';

import style from './profile-button.module.scss';

interface ProfileButtonProps {
  // eslint-disable-next-line react/no-unused-prop-types
  list?: Array<string>;
}
interface ProfileButtonState {
  isOpened: boolean;
}

export class ProfileButton extends React.Component<ProfileButtonProps, ProfileButtonState> {
  constructor(props) {
    super(props);
    this.state = { isOpened: false };
    this.toggleState = this.toggleState.bind(this);
  }

  // TODO: Fix eslint issues

  // eslint-disable-next-line react/sort-comp
  toggleState() {
    // eslint-disable-next-line react/destructuring-assignment
    this.setState({ isOpened: !this.state.isOpened });
  }

  render() {
    let dropdownMenu;

    // eslint-disable-next-line react/destructuring-assignment
    if (this.state.isOpened) {
      dropdownMenu = (
        <ul className={style.DropdownMenu}>
          <li className={style.DropdownItem}>
            {/* TODO: Fix links */}
            <a href="" className={style.DropdownLink}>
              {i18next.t('js.navigation.viewHistory')}
            </a>
          </li>
          <li className={style.DropdownItem}>
            <a href="" className={style.DropdownLink}>
              {i18next.t('js.navigation.settings')}
            </a>
          </li>
          <li className={style.DropdownItem}>
            <a href="" className={style.DropdownLink}>
              {i18next.t('js.navigation.help')}
            </a>
          </li>
          <li className={style.DropdownItem}>
            <a href="" className={style.DropdownLink}>
              {i18next.t('js.navigation.out')}
            </a>
          </li>
        </ul>
      );
    }

    return (
      <div className={style.Wrapper}>
        <div className={style.Dropdown}>
          <button onClick={this.toggleState} className={style.DropdownButton} type="button" />
          {dropdownMenu}
        </div>
      </div>
    );
  }
}
