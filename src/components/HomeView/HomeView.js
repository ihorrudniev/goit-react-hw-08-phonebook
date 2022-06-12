import React from 'react';

const styles = {
  container: {
    marginTop: '30vh',
    minHeight: 'calc(100vh - 50px)',
    // display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 48,
    textAlign: 'center',
  },
  text: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: 'center',
  },
};

const HomeView = () => (
  <div style={styles.container}>
    <h1 style={styles.title}>Приветствую!</h1>
    <h2 style={styles.text}> Вы на сервисе хранения контактов!</h2>
  </div>
);

export default HomeView;
