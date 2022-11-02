import React, {Component} from "react";
import './App.css';
import MyComponet from './MyComponet'

//클래스 작성
class App extends Component{
  //부모 component에 있는 render 함수를 가져다 쓴다.
  render() {
    const name = 'react';
    return <div>{name}</div>
  }

}


export default App;
