
const { createStore } = require('redux');
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
    comments:[],
    favorites:[],
    history:[],
    likes: [],
    followers: [],
};


const store = createStore(reducer, initialState);

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








