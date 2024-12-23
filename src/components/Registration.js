import React from 'react';

function Registration() {
  return (
    <div className="registration">
      <h2>Registration</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
