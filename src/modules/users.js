const ADD_USER = "user/ADD_USER";

let nextUserId = 1;
export function addUser(user) {
  return {
    type: ADD_USER,
    id: `user${nextUserId+= 1}`,
    user
  }
}

const initialState = {
  byId: {
    user1: {
      id: "user1",
      login: "tmhw",
      name: "안형우",
      email: "rktnsinger@gmail.com",
      profile: ""
    },
    user2: {
      id: "user2",
      login: "soobin-c",
      name: "이수빈",
      email: "esoobin96@naver.com",
      profile: ""
    },
  },
  allIds: ["user1", "user2"]
}

export default function reducer(state = initialState, action) {
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
