
const { createStore, applyMiddleware, compose } = require('redux');
const reducer = require ("./reducers");
const { addPost } = require("./actions/post");
const { logIn, logOut } = require("./actions/user");

// Redux 를 할때는 initialState 같은 구조를 짤때가 중요함
// 아니면 아래의 action, post 등 다 엉킴
const initialState = {
    // 폴더를 분리하는 기준은 데이터 기준 => 종속 되는것도 잘 구분 절대적이진 않음 효율적인것을 판단
    user: {
        isLoggingIn: true,
        data:null,
    },
    posts: [],
};


// compose 는 안써도 됨 사실상
// const enhancer = applyMiddleware() 이렇게 쓰는게 일반적
// compose 를 사용하는 이유는 합성의 의미 applyMiddleware() 외에 추가적으로 붙힐 때 compose 로 합성해주는 함수
const firstMiddleware = (store)=>(next)=>(action)=>{
    // 삼단 고차 함수 = 함수안에 함수를 return 하는 형식의 식을 그냥 보기 쉽게 만들어 놓은것 뿐임 함수 사이사이에 식이 필요없다면 그냥 이런식으로 사용함
    console.log('액션 로깅',action); // 기본기능 실행 전 action 을 추가 = 기능 추가하는 거임 next 전후로 
    // 여기서 next 는 dispatch 의 역할과 같다
    next(action) // 기본기능
    console.log('액션 끝'); // 이러면 기본 기능 이후 실행될 action 추가한거임
}
const enhancer = compose(
    applyMiddleware(firstMiddleware),
)

const store = createStore(reducer, initialState, enhancer);
store.subscribe(()=>{ // react-redux 안에 들어있어서 자동으로 실행되기 때문에 테스트 할때 아니고서야 잘 안쓰는 함수
    console.log('changed');
})


console.log('1st', store.getState());



store.dispatch(logIn({
    id:1,
    name: 'junwoo',
    admin: true,
}));
console.log('2nd', store.getState());

store.dispatch(addPost({
    userId:1,
    id:1,
    content:'안녕하세요',
}));
console.log('3rd', store.getState());

store.dispatch(addPost({
    userId:1,
    id:2,
    content:'반갑습니다.',
}));
console.log('4th', store.getState());

store.dispatch(logOut());
console.log('5th', store.getState());

// action 같은 것들은 기본적으로 다 동기 (객체)
// dispatch() 함수는 그냥 객체를 받아서 dispatch 하는 역할
// 때문에 redux 에서는 비동기를 처리하기 위해 미들웨어를 사용함

// redux 에서 미들웨어의 대표적으로 사용하는 것
// redux-thunk
// redux-saga





