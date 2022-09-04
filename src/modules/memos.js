import { ref, set, get, onValue, increment, update } from "firebase/database"
import { database } from "../firebase/firebaseConfig";

const SUBSCRIBE_MEMOS = "SUBSCRIBE_MEMOS";
const SUBSCRIBE_MEMOS_SUCCESS = "SUBSCRIBE_MEMOS_SUCCESS";
const SUBSCRIBE_MEMOS_FAIL = "SUBSCRIBE_MEMOS_FAIL"

const ADD_MEMO_REQUEST = "ADD_MEMO_REQUEST";
const ADD_MEMO_SUCCESS = "ADD_MEMO_SUCCESS";
const ADD_MEMO_FAIL = "ADD_MEMO_FAIL";

const DELETE = {
  REQUEST: "DELETE_MEMO_REQUEST",
  SUCCESS: "DELETE_MEMO_SUCCESS",
  FAIL: "DELETE_MEMO_FAIL"
}

export function subscribeMemos() {
  return (dispatch) => {
    dispatch({ type: SUBSCRIBE_MEMOS });

    try {
      const memosRef = ref(database, "memos");

      onValue(memosRef, (snapshot) => {
        const memos = snapshot.val();

        dispatch({ type: SUBSCRIBE_MEMOS_SUCCESS, memos });
      });
    } catch (e) {
      dispatch({ type: SUBSCRIBE_MEMOS_FAIL, isError: true });
    }
  }
}

export function addMemo(memo) {
  return (dispatch) => {
    dispatch({ type: ADD_MEMO_REQUEST });

    try {
      const newIdRef = ref(database, "memos/nextMemoId");

      get(newIdRef)
        .then((snapshot) => snapshot.val())
        .then((id) => {
          const newMemoId = `memo${id}`

          update(ref(database, "memos"),{
            [`allIds/${id - 1}`]: newMemoId,
            [`byId/${newMemoId}`]: { id: newMemoId, ...memo },
            ["nextMemoId"]: increment(1)
          });
        });

      dispatch({ type: ADD_MEMO_SUCCESS });
    } catch (e) {
      dispatch({ type: ADD_MEMO_FAIL });
      console.log(e);
    }
  }
}

export function deleteMemo(memoId) {
  return (dispatch) => {
    dispatch({ type: DELETE.REQUEST });

    try {
      const deleteTarget = {
        [`allIds/${memoId.slice(4) - 1}`]: null,
        [`byId/${memoId}`]: null
      };

      update(ref(database, "memos"), deleteTarget);
    } catch(e) {
      dispatch({ type: DELETE.FAIL });
      console.log(e);
    }

  };
}

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SUBSCRIBE_MEMOS:
      return {
        isLoading: true,
        isError: false
      };
    case SUBSCRIBE_MEMOS_SUCCESS:
      return {
        isLoading: false,
        isError: false,
        ...action.memos
      };
    case SUBSCRIBE_MEMOS_FAIL:
      return {
        isLoading: false,
        isError: true,
      }
    case ADD_MEMO_REQUEST:
      return {
        isLoading: true,
        isError: false
      };
    case ADD_MEMO_SUCCESS:
      return {
        isLoading: false,
        isError: false
      };
    case ADD_MEMO_FAIL:
      return {
        isLoading: false,
        isError: true
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
