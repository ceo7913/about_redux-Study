// 여기서 reducer 부분이 분리가 쉬운 이유는 순수함수 여서 그럼
// 순수함수란 매개변수와 함수 내부에서 선언한 변수들을 빼고는 다른것을 참조하지 않는 함수
// 한마디로 자체적으로 실행이 가능하다는 것

const reducer = (prevState, action) => {
    switch (action.type){
        case "LOG_IN":
            return {
                ...prevState,
                user: action.data,
            };
        case "LOG_OUT":
            return {
                ...prevState,
                user: null,
            };
        case "ADD_POST":
            return {
                ...prevState,
                posts: [...prevState.posts, action.data],
            }; 
        default :
            return prevState;
            
    }

};

// 모듈로 만들어 주는 방법
module.exports = reducer