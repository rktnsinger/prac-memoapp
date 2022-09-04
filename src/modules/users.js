const ADD_USER = "user/ADD_USER";

let nextUserId = 1;
export function addUser(user) {
  return {
    type: ADD_USER,
    id: `user${nextUserId+= 1}`,
    user
  }
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        login: action.login,
        name: action.name,
        email: action.email,
        profile: action.profile
      };
    default:
      return state;
  }
}
