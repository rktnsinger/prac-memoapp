// Action type
const ADD_MEMO = "memo/ADD_MEMO";
const DELETE_MEMO = "memo/DELETE_MEMO";

// Action creater
let nextMemoId = 1;
export function addMemo(memo) {
  return {
    type: ADD_MEMO,
    id: `memo${nextMemoId+= 1}`,
    memo,
  };
}

// initial state
const initialState = {
  byId: {
    memo1: {
      id: "memo1",
      title: "과제하기",
      body: "메모 어플",
      timeStamp: "2022-09-01 14:05:23"
    },
    memo2: {
      id: "memo2",
      title: "공부하기",
      body: "백엔드 예습",
      timeStamp: "2022-09-02 08:15:46"
    }
  },
  allIds: ["memo1", "memo2"]
}

// reducer
export default function memoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_MEMO:
      return {
        ...state,
        title: action.title,
        body: action.body,
        timeStamp: action.timeStamp
      };
    default:
      return state;
  }
}
