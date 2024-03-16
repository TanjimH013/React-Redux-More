export const initialState = { users: [] };

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case "DELETE_USER":
      const filteredUsers = state.users.filter(
        (users) => users.id !== action.payload
      );
      return {
        ...state,
        users: filteredUsers,
      };

    default:
      return state;
  }
};
