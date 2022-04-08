import style from "./loader.module.scss";

export const Loader = () => {
  return (
    <div className={style.spinner}>
      <div className={style.bounce1} />
      <div className={style.bounce2} />
      <div className={style.bounce3} />
    </div>
  );
};
