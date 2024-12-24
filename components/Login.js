"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "@/styles/Login.module.css";
import Image from "next/image";
import footer from "../public/footer.png";

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!validateUsername(username)) {
      setError("Username must contain both alphabets and numbers");
      return;
    }

    if (!validatePassword(password)) {
      setError(
        "Password must contain a capital letter, a lowercase letter, a number, a special character, and be at least 12 characters long"
      );
      return;
    }

    // Continue with login logic
    router.push("/Home");
  };

  const validateUsername = (username) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/;
    return regex.test(username);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$/;

    if (!/(?=.*[a-z])/.test(password)) {
      setError("Password must contain at least one lowercase letter");
      return false;
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      setError("Password must contain at least one uppercase letter");
      return false;
    }

    if (!/(?=.*\d)/.test(password)) {
      setError("Password must contain at least one digit");
      return false;
    }

    if (!/(?=.*[@$!%*?&])/.test(password)) {
      setError("Password must contain at least one special character");
      return false;
    }

    if (password.length < 12) {
      setError("Password must be at least 12 characters long");
      return false;
    }

    return regex.test(password);
  };

  return (
    <>
      <div className={styles.container1}>
        <div className={styles.card1}>
          <form className={styles.wrapper1}>
            <h2 className={styles.log}>Login</h2>
            {error && <p className={styles.error}>{error}</p>}
            <section className={styles.group}>
              <input
                type="text"
                size="30"
                className={styles.input}
                name="email"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </section>
            <br />
            <br />
            <section className={styles.group}>
              <input
                type="password"
                minLength="8"
                className={styles.input}
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </section>
            <br />
            <br />
            <button
              type="button"
              className={styles.loginbtn}
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>

        <div className={styles.footer}>
          <Image src={footer} alt="img" />
        </div>
      </div>
    </>
  );
}

export default Login;
