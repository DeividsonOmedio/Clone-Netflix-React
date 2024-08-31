import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/login.module.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email && password) {
      router.push('/home');
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.headerLogo}>
        <a>
          <img src="/logo.png" alt="Logo Netflix" className={styles.logoImage}/>
        </a>                                
      </div>
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
