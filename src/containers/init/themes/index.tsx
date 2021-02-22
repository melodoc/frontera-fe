import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {getThemes} from "../../../__data__/action/themes";
import { LinkButton } from './../../../components/link';
import { URLs } from './../../../__data__/urls';
import { Link as ConnectedLink } from 'react-router-dom';

import IconLogo from '../../../components/icon-logo';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import List from '../../../components/list';
import Navigation from '../../../components/navigation';
import Footer from '../../../components/footer';

import style from '../style.css';

const ChooseTheme= () =>{
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getThemes());
  }, []);

  const { isLoading } = useSelector((state: any) => ({ isLoading: state.themes.loading }));
  const { themes } = useSelector((state: any) => ({ themes: state.themes.themes }));
  const { errors } = useSelector((state: any) => ({ errors: state.themes.errors }));
  
  return (
    <React.Fragment>
      <header className={style.header}>
        <nav className={style.nav}>
          <div className={style.iconNav}>
            <IconLogo />
          </div>
          <Navigation links={['Sign Out']} />
        </nav>
      </header>
      <main className={style.container}>
        <section className={style.login}>
          <TitleWithSubtitle type={'themes'} />
        </section>
        <form method="post" action="#">
          <div className={style.formWrapper}>
            {isLoading ? <span> Loading... </span>
              : themes && <List labels={themes} />}
            {errors && <span>{errors.find((error) => error.field === 'themes').text}</span>}
          </div>
          <div className={style.buttons}>
            <LinkButton
              to={URLs.personalizing.url}
              as={ConnectedLink}>
              Continue
            </LinkButton>
          </div>
        </form>
      </main>
      <Footer links={['Frontera', 'Cookies Notice', 'Privacy Notice', 'Terms', 'HelpDesk']} />
    </React.Fragment>
  );
}
    

export default ChooseTheme;
