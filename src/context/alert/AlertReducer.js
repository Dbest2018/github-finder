const alertReducer = (state, action) => {
  switch (action.type) {
    case "SEND_ALERT":
      return action.payload;
    case "REMOVE_ALERT":
      return null;
    default:
      return state;
  }
};

export default alertReducer;
