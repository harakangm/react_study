import React, { useState } from "react";
import onClick from "./../../../../ezen-ui-team-project/lib/swiper-8.4.4/core/events/onClick";

const login = () => {
  const [logId, setLogId] = useState("");
  const [logPass, setLogPass] = useState("");

  const onChangeLogId = (e) => {
    return setLogId(e.target.value);
  };

  const onChangesetLogPass = (e) => {
    return setLogPass(e.target.value);
  };

  const onClick = (e) => {
    if (!onChangeLogId) {
      alert("아이디를 입력하세요");
    }
  };

  return (
    <label>
      로그인
      <input type="text" id="logId"></input>
      비밀번호
      <input type="password" id="logPass"></input>
      <button>확인</button>
    </label>
  );
};

export default login;
