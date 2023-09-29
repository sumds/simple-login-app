export const validateLogin = (username, password) => {
  const errors = {};

  // Username validation
  if (!username) {
    errors.username = 'Username is required.';
  } else {
    if (username === 'admin') errors.username = 'Using "admin" as a username is not allowed.';
    if (username.length < 4) errors.username = 'Username should be at least 4 characters.';
    if (/\s/.test(username)) errors.username = 'Username should not contain spaces.';
    if (/^\d+$/.test(username)) errors.username = 'Username should not be purely numeric.';
  }

  // Password validation
  if (!password) {
    errors.password = 'Password is required.';
  } else {
    if (password === 'password123') errors.password = 'Using "password123" as a password is too weak.';
    if (password.length < 8) errors.password = 'Password should be at least 8 characters.';
    if (password.includes(username)) errors.password = 'Password should not contain the username.';
    if (!/[A-Z]/.test(password)) errors.password = 'Password should contain at least one uppercase letter.';
    if (!/[a-z]/.test(password)) errors.password = 'Password should contain at least one lowercase letter.';
    if (!/[0-9]/.test(password)) errors.password = 'Password should contain at least one number.';
    if (!/[@$!%*?&#]/.test(password)) errors.password = 'Password should contain at least one special character (@, $, !, %, *, ?, &, #).';
    if (/(\d{4,}|abc|def|ghi|jkl|mno|pqrs|tuv|wx|yz)/i.test(password)) errors.password = 'Password should not contain consecutive characters or sequences.';
  }

  return errors;
};