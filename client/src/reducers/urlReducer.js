export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_URL":
      return action.payload;

    case "ADD_URL":
      return [...state, action.payload];

    case "DELETE_URL":
      return state.filter(url => url._it !== action.payload);

    case "EDIT_URL":
      return state.map(url =>
        url._id === action.payload.id ? action.payload : url
      );

    default:
      return state;
  }
};
