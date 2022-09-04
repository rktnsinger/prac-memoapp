import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addMemo } from "../../../modules/memos";

import { getCurrentTimeStamp } from "../../utils/dateArranger";

export default function MemoForm() {
  const [memoInput, setMemoInput] = useState({
    title: "",
    body: "",
  });

  const dispatch = useDispatch();

  function handleMemoSubmit(ev) {
    ev.preventDefault();

    const timeStamp = getCurrentTimeStamp();

    dispatch(addMemo({ ...memoInput, timeStamp }));

    setMemoInput({
      title: "",
      body: "",
    });
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
    </>
  );
}
