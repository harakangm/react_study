import React, { useState, useEffect } from "react";

const Info = () => {
  // state 컴포넌트 안에서 쓰이는 변수

  const [name, setName] = useState("");
  const [ninkname, setNickname] = useState("");

  // //1. 컴포넌트가 랜더링이 실행되었을때 사용되는 hook
  // useEffect(() => {
  //   console.log("렌더링이 완료되었습니다.");
  //   console.log({ name, ninkname });
  // });

  // //2. 맨 처음 렌더링이 될때만 실행되고, 업데이트 될때는 실행되지 않음
  //   useEffect(() => {
  //     console.log("렌더링이 완료되었습니다.");
  //     console.log({ name, ninkname });
  //   }, []);

  // // 3. 특정 값이 변경될때만 호출
  //     useEffect(() => {
  //       console.log("렌더링이 완료되었습니다.");
  //       console.log({ name, ninkname });
  //     }, [name]);

  //4. 뒷정리 함수 업데이트가 되기 전에 리턴값의 함수를 먼저 실행시켜줌
  // useEffect(() => {
  //   console.log("effect");
  //   console.log( name );

  //   return () => {
  //     console.log('cleanup')
  //   };

  // }, [name]);

  useEffect(() => {
    console.log("effect");
    console.log(name);

    return () => {
      console.log("cleanup");
      console.log(name);
    };
  }, [name]);

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
