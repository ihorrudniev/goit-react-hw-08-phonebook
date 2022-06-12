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
export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
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
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <div className={style.wrapper}>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <label style={styles.label}>
          Name
          <input
            style={styles.input}
            type="text"
            name="name"
            placeholder="введите имя контакта"
            value={name}
            onChange={handleChange}
          ></input>
        </label>
        <label style={styles.label}>
          Mail
          <input
            style={styles.input}
            type="email"
            name="email"
            placeholder="введите email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label style={styles.label}>
          Password
          <input
            style={styles.input}
            type="password"
            name="password"
            placeholder="введите пароль (не менее семи знаков)"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={style.submit}>
          Register
        </button>
      </form>
    </div>
  );
}
