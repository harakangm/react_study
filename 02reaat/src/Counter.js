import React, { Component } from 'react'

//클래스형태를 사용하기 위해서 임포트가 필요

class Counter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
            fixedNumber: 0,
            number2: 99
        }
    } // constrictor사용시 반드시 선언 component의 생성자 함수를 호출해줌

    render() {
        const {number, fixedNum, number2} = this.state

        return (
            <div>
              <h1>{number}</h1>

              <button onClick={(prevState)=>{
                // this.setState({ number: number +1})

                //prevState 도 있다
                this.setState((prevState) => {
                    return { number:number +1 
                    }
                })
              }}>+1</button>

            <h1>{number2}</h1>
              <button onClick={()=>{this.setState({number2: number2 -1})}}>-1</button>
            </div>
        );
    }
}

export default Counter;
