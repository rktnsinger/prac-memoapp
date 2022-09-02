import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMemo, setInitialMemos } from "../../../modules/memos";

import { setInitialDB, getMemosFromDB } from "../../../firebase/api";
import { getCurrentTimeStamp } from "../../utils/dateArranger";


export default function MemoForm() {
  const [memoInput, setMemoInput] = useState({
    title: "",
    body: "",
  });

  const memoList = useSelector((state) => state.memos);
  
  const dispatch = useDispatch();

  function handleMemoSubmit(ev) {
    ev.preventDefault();

    const timeStamp = getCurrentTimeStamp();
    console.log(memoInput);

    dispatch(addMemo({ ...memoInput, timeStamp }));
    setMemoInput({
      title: "",
      body: "",
    });
  }

  async function onMemosLoad() {
    const data = await getMemosFromDB();

    dispatch(setInitialMemos(data));
  }

  return (
    <>
      <form onSubmit={(ev) => handleMemoSubmit(ev)}>
        <input
          name="title"
          placeholder="제목"
          value={memoInput.title}
          onChange={(ev) => setMemoInput((state) => ({
            ...state,
            title: ev.target.value
          }))}
        >
        </input>
        <input
          name="body"
          placeholder="상세 내용"
          value={memoInput.body}
          onChange={(ev) => setMemoInput((state) => ({
            ...state,
            body: ev.target.value
          }))}
        >
        </input>

        <button>
          메모 추가하기
        </button>
      </form>

      <button
        onClick={() => setInitialDB()}
      >
        FB 초기데이터 set
      </button>

      <button
        onClick={() => console.log(memoList)}
      >
        현재 memoList 콘솔 확인
      </button>

      <button
        onClick={() => onMemosLoad()}
      >
        서버로부터 데이터 가져오기
      </button>

    </>
  );
}
