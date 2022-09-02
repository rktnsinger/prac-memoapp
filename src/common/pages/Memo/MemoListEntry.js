import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid grey;
  padding: 10px;
  margin-top: 10px;
  width: 400px;
  height: 200px;

  .entry-header {
  }

  .entry-main {
  }

  .entry-footer {
    align-self: flex-end;
  }
`

export default function MemoListEntry({ memoId }) {
  const memoList = useSelector((state) => state.memos.byId);

  const displayedMemo = memoList[memoId];

  return (
    <Container>
      <div className="entry-header">
        { displayedMemo.title }
      </div>
      <div className="entry-main">
        { displayedMemo.body }
      </div>
      <div className="entry-footer">
        { displayedMemo.timeStamp }
      </div>
    </Container>
  );
}
