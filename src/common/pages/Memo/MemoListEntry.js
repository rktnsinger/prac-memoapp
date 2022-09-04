import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { deleteMemo } from "../../../modules/memos";

const Container = styled.div`
  background-color: antiquewhite;
  border-radius: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
  width: 400px;

  .entry-header {
    color: brown;
    font-size: 26px;
    margin-bottom: 20px;
  }

  .entry-body {
    height: 50px;
    flex-wrap: wrap;
    overflow-wrap: break-word;
    /* text-overflow: ellipsis; */
  }

  .entry-time {
    align-self: flex-end;
  }
  .entry-footer {
    align-self: flex-end;
    margin-top: 10px;
  }
`

export default function MemoListEntry({ memoId }) {
  const memoList = useSelector((state) => state.memos.byId);

  const dispatch = useDispatch();

  const displayedMemo = memoList[memoId];

  // console.log(memoId);

  function handleDeleteMemo() {
    dispatch(deleteMemo(memoId));
  }

  return (
    <Container>
      <div className="entry-header">
        { displayedMemo.title }
      </div>
      <div className="entry-body">
        { displayedMemo.body }
      </div>
      <div className="entry-time">
        { displayedMemo.timeStamp }
      </div>

      <div className="entry-footer">
        <button>
          수정
        </button>
        <button onClick={() => handleDeleteMemo()}>
          삭제
        </button>
      </div>
    </Container>
  );
}
