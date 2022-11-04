import React, { useState } from "react";

const Info = () => {
  const [name, setName] = useState("");
  const [ninkname, setNickname] = useState("");

  //name을 변경시킴
  const onChangeName = (e) => {
    setName(e.target.value);
  };

  //ninkname을 변경시킴
  const onChangeNinkname = (e) => {
    setNickname(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} />
        <input value={ninkname} onChange={onChangeNinkname} />
      </div>
      <div>
        <div>
          <b>이름:</b>
          {name}
        </div>
        <div>
          <b>닉네임:</b>
          {ninkname}
        </div>
      </div>
    </div>
  );
};

export default Info;
