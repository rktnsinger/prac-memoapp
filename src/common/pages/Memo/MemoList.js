import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import MemoListEntry from "./MemoListEntry";
import Loading from "../../components/Loading";
import { subscribeMemos } from "../../../modules/memos";

export default function MemoList() {
  const memos = useSelector((state) => state.memos);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(subscribeMemos());
  }, [dispatch]);

  if (!memos.allIds) {
    return (
      <div>
        표시할 데이터가 없습니다
      </div>
    );
  }

  if (memos.isLoading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      {
        Array.from(Object.values(memos.allIds)).map((id) => {
          return (
            <MemoListEntry key={id} memoId={id} />
          );
        })
      }
    </>
  );
}
