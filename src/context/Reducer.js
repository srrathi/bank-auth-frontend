const Reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
        token: "",
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload.user,
        token: action.payload.token,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
        token: "",
      };
    case "LOGOUT":
      return {
        user: null,
        isFetching: false,
        error: false,
        token: "",
      };
    default:
      return state;
  }
};

export default Reducer;
