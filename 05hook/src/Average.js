import React, { useState, useMemo, useCallback, useRef } from "react";

const getAverage = (numbers) => {
  console.log("계산중....");

  if (numbers.length === 0) return 0;

  const sum = numbers.reduce((a, b) => {
    return a + b;
  }); //누적합산

  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  //useCallback 뒤에 있는 값이 바뀔때만 함수를 생성함
  const onChange = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(
    (e) => {
      //숫자형으로 강제 형변환
      const nextList = list.concat(parseInt(number));
      setList(nextList);
      setNumber("");
      inputEl.current.focus();
    },
    [number, list]
  ); // number나 혹은 list가 바뀌었을때 함수를 생성

  // useMemo
  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChange} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        <b>평균값:</b> {avg}
      </div>
    </div>
  );
};

export default Average;
