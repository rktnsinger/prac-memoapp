import React, { useState } from "react";

export default function Login() {
  const [loginInput, setLoginInput] = useState("");


  function handleLogin(ev) {
    ev.preventDefault();

    console.log(loginInput);


  }


  return (
    <>
    <h1>mini Memo</h1>
      <form onSubmit={handleLogin}>
        <input
          placeholder="이메일을 입력해주세요"
          value={loginInput}
          onChange={(ev) => setLoginInput(ev.target.value)}
        />
        <button>
          로그인
        </button>
      </form>
    </>
  );
}
