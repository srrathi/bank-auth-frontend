// LOGIN START ACTION
export const LoginStart = (userCredentials) => {
  return {
    type: "LOGIN_START",
  };
};

// LOGIN SUCCESS ACTION
export const LoginSuccessfull = (data) => {
  return {
    type: "LOGIN_SUCCESS",
    payload: data,
  };
};

// LOGIN FAIL ACTION
export const LoginFailure = () => {
  return {
    type: "LOGIN_FAILURE",
  };
};

// LOGOUT ACTION
export const LogOut = () => {
  return {
    type: "LOGOUT",
  };
};
