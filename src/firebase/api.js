import { ref, set, get, onValue } from "firebase/database"
import { database } from "./firebaseConfig";

import { getInitialMemos } from "../modules/memos";
import { memoMock } from "../common/utils/dataMock";


export function setInitialDB() {
  set(ref(database, "memos"), memoMock);
}

export async function getMemosFromDB() {
  const memosRef = ref(database, "memos");
  let result = {};

  await get(memosRef).then((snapshot) => {
    const memos = snapshot.val();
    // console.log(memos);

    result = memos;
  });

  return result;
}
