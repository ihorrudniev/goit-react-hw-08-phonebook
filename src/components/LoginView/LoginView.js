import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import style from '../LoginView/LoginView.module.css';

const styles = {
  form: {
    width: 600,
    marginLeft: 'auto',
    marginRight: 'auto',
    textAlign: 'center',
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    height: 40,
    fontSize: 24,
    borderRadius: 5,
  },
};

const LoginView = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div className={style.wrapper}>
      <h1>Страница логина</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Почта
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="введите email"
            value={email}
            onChange={handleChange}
          ></input>
        </label>
        <label style={styles.label}>
          Пароль
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="введите пароль (не менее семи знаков)"
            value={password}
            onChange={handleChange}
          ></input>
        </label>
        <button type="submit" className={style.submit}>
          Войти
        </button>
      </form>
    </div>
  );
};

export default LoginView;