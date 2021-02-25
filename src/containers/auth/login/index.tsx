import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Link as ConnectedLink, useHistory } from 'react-router-dom';
import { URLs } from '../../../__data__/urls';
import { getLogin } from '../../../__data__/action/login' 

import HeaderForm from '../../../components/header-form';
import TitleWithSubtitle from '../../../components/title-with-subtitle';
import Input from '../../../components/input';
import LoginActions from '../../../components/login-actions';

import style from '../style.css';
import { stat } from 'fs';

const Login = () => {
  const dispatch = useDispatch();
  const [login, setLogin] = useState(''); 
  const [password, setPassword] = useState(''); 
  const token = useSelector((state: any) => state.login.token);
  const errors = useSelector((state: any) => state.login.errors);

  const handleChangeLogin = (event) => {
    setLogin(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getLogin(login, password));
  };

  const history = useHistory();
  
  if (token) {
    history.push(URLs.home.url);
  }

  if (errors) {
    alert('Пользователь не найден');
  }

    return (
      <React.Fragment>
        <HeaderForm />
        <main className={style.container}>
          <section className={style.form}>
            <TitleWithSubtitle type={'login'} />
            <form onSubmit={handleSubmit}>
              <div>
                <Input onChange={handleChangeLogin} label="Email Address" id="userEmail" name="email" type="text" placeholder="email@example.com" value={login}/>
                <Input onChange={handleChangePassword} label="Password" id="password" name="password" type="password" placeholder="••••••" value={password}/>
              </div>
              <LoginActions />
              <div className={style.buttons}>
                <button type='submit'>Login</button>
              </div>
            </form>
          </section>
        </main>
      </React.Fragment>
    );
}

export default Login;
