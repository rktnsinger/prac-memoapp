import React from "react";
import { useSelector } from "react-redux";

import { set, ref } from "firebase/database";
import { database } from "../../firebase/firebaseConfig";
import { memoMock } from "../../modules/mockdata";

export default function Header() {
  const memoList = useSelector((state) => state.memos);

  function clearMemoDatabase() {
    try {
      set(ref(database, "memos"), null);
    } catch (e) {
      console.log(e);
    }
  }

  function setMockDatabase() {
    try {
      set(ref(database, "memos"), memoMock);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <>
      <button
        onClick={() => clearMemoDatabase()}
      >
        FB Memos 초기화
      </button>
      <button
        onClick={() => setMockDatabase()}
      >
        FB Memos mock 설정
      </button>
      <button
        onClick={() => console.log(memoList)}
      >
        로컬 state.memos 확인
      </button>

    </>
  );
}
