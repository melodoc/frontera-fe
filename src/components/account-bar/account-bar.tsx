import { SearchInput } from "../search-input/search-input";
import { ProfileButton } from "../profile-button/profile-button";
import style from "./account-bar.module.scss";

export const AccountBar = () => {
  return (
    <div className={style.AccountBar}>
      <SearchInput />
      <ProfileButton />
    </div>
  );
};
