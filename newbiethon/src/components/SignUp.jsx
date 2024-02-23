import React, { useState } from 'react'
import '../css/sign-up.css'

// const saveInfo = () => {
//   const form = document.querySelector('form');
// };
export default function SignUp() {
  return (
    <div className="login-container">
      <div className="logo">
        Medi<span style={{ color: '#f35c16' }}>Tracker</span>
      </div>
      <form
        className="sign-up"
        onSubmit={(e) => {
          e.preventDefault()
          location.href = '/medi/dashboard'
        }}
      >
        <div className="inputs">
          <div className="username">
            <label htmlFor="username">
              <i className="fa-solid fa-user"> </i> Username
            </label>
            <input
              type="text"
              name="username"
              className="username-input"
              required
            />
          </div>
          <div className="password">
            <label htmlFor="password">
              <i className="fa-solid fa-key"> </i> Password
            </label>
            <input
              type="password"
              name="password"
              className="password-input"
              required
            />
          </div>
          <div className="confirm password">
            <label htmlFor="confirm-password">
              <i className="fa-solid fa-lock"> </i> Confirm password
            </label>
            <input
              type="password"
              name="confirm-password"
              className="password-input"
              required
            />
          </div>
        </div>
        <a href="test.html">
          <button type="submit" className="submit-button">
            Sign up!
          </button>
        </a>
      </form>
    </div>
  )
}
