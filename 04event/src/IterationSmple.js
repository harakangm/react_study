import React, { useState } from "react";
import onClick from "./../../../../ezen-ui-team-project/lib/swiper-8.4.4/core/events/onClick";
import { filter } from "dom7";

const IterationSmple = () => {
  // 컴포넌트 배열을 알아서 뿌려줌
  // 컴포넌트가 배열이면 반드시 키 값이 필요함
  // 키 값 생성
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "얼음" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);

  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const nameList = names.map((name) => (
    <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
      {name.text}
    </li>
  ));

  // 입력된 값으로 업데이트를 시켜줌
  const onChange = (e) => setInputText(e.target.value);

  const onClick = () => {
    //추가로 두개의 배열을 합쳐주는 메서드
    const nextNames = names.concat({
      id: nextId,
      text: inputText,
    });

    setNextId(nextId + 1);
    setNames(nextNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => {
      return name.id !== id;
    });
    setNames(nextNames);
  };

  return (
    <>
      <input value={inputText} onChange={onChange} />
      <button onClick={onClick}>추가</button>
      <ul>{nameList}</ul>
    </>
  );
};

export default IterationSmple;
