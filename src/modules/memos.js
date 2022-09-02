const SET_INITIAL_MEMOS = "memo/SET_INITIAL_MEMOS"
const ADD_MEMO = "memo/ADD_MEMO";
const DELETE_MEMO = "memo/DELETE_MEMO";

let nextMemoId = 0;
export function addMemo(memo) {
  return {
    type: ADD_MEMO,
    id: `memo${nextMemoId+= 1}`,
    ...memo,
  };
}

export function setInitialMemos(memos) {
  return {
    type: SET_INITIAL_MEMOS,
    memos
  };
}

const initialState = {
  byId: {},
  allIds: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_INITIAL_MEMOS:
      return {
        isLoading: false,
        isError: false,
        ...action.memos
      };

    case ADD_MEMO:
      return {
        byId: {
          ...state.byId,
          [action.id]: {
            id: action.id,
            title: action.title,
            body: action.body,
            timeStamp: action.timeStamp
          }
        },
        allIds: state.allIds.concat(action.id)
      };

    default:
      return state;
  }
}

// side effects, only as applicable
// e.g. thunks, epics, etc
// ducks 패턴 예시

// export function getWidget () {
//   return dispatch => get('/widget').then(widget => dispatch(updateWidget(widget)))
// }
