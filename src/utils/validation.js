export const validateLogin = (username, password) => {
    const errors = {};
    if (!username) errors.username = 'Username is required.';
    if (!password) errors.password = 'Password is required.';
    // Add more validation rules as required.
    return errors;
  };
  