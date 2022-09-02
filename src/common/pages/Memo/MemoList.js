import React from "react";
import { useSelector } from "react-redux";

import MemoListEntry from "./MemoListEntry";

export default function MemoList() {
  const memoIdList = useSelector((state) => state.memos.allIds);


  if (!memoIdList.length) {
    return (
      <>
        표시할 데이터가 없습니다.
      </>
    );
  }

  return (
    <>
      {
        memoIdList.map((memo) => {
          return (
            <MemoListEntry key={memo} memoId={memo} />
          );
        })
      }
    </>
  );
}
