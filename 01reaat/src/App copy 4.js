import logo from './logo.svg';
import './App.css';

function App() {
  //2. {} 중괄호 이용시 자바스크립트 표현식을 쓸 수 있다.
   const name =undefined; //false
  return (
    //3. &&, || 연산자 에서 true false 출력
    <div>
      {name && '리액트' }
    </div>
  );
}

export default App;
