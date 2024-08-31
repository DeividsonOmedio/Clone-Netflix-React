import React, { useState } from 'react';
import styles from '../login/login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginContent}>
        <h1>Entrar</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles.loginButton}>Entrar</button>
        </form>
        <div className={styles.signupLink}>
          <p>Novo por aqui? <a href="#">Assine agora</a>.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
