import style from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={style.Spinner}>
      <div className={style.Bounce1} />
      <div className={style.Bounce2} />
      <div className={style.Bounce3} />
    </div>
  );
};
