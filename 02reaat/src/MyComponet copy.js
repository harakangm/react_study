import PropTypes from 'prop-types'

const MyComponet = ({name, forNumber, children}) => {
    // //비구조화 활당
    // const {name, children} = props
                    // app.js에서 지정한 프롭스를 가져옴
                    //상위 컴포넌트에서 하위 컴포넌트로 데이터를 받을 수 있다
                    // 리턴값이 두줄이상이면 괄호를 쓰고 해야한다
                    //칠드런은 태그사이에 내용을 보여줌
    return ( 
    <div>
    <div>안녕 {name} 새로운 컴포넌트 입니다.</div> <br />
     칠드런 값은 {children} 입니다.
     <br />
     좋아하는 숫자는 {forNumber} 입니다.
    </div>

    )
}

//디폴트 프롭스
MyComponet.defaultProps = {
    name: '기본이름'
}

MyComponet.propTypes = {
    name: PropTypes.string,
    forNumber: PropTypes.number.isRequired
}
export default MyComponet;