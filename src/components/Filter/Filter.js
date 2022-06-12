import React from 'react';
import styles from './Filter.module.css';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contacts/actions';
import { getFilter } from '../../redux/contacts/selectors';

const Filter = () => {
  const contacts = useSelector(getFilter);
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <label>
        <h3>Search for a contact by name</h3>
        <input
          type="text"
          placeholder="введите имя контакта"
          value={contacts}
          onChange={e => dispatch(changeFilter(e.target.value))}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  contacts: PropTypes.string,
  onChange: PropTypes.func,
};

export default Filter;
