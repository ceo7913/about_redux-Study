// ======================================= redux 의 state 요소 (store)
const { createStore } = require('redux');

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

const initialState = {
    // 초기값
    // 처음에 내가 무엇을 어떻게 바꿔줄 것인지 생각하면 만들기 편함
    user: null,
    posts: [],
};

// const nextState = {
//     ...initialState,
//     새로운 data 는 action data 기존 중복 데이터는 ...initialState.posts 로 처리, 배열일 경우  => 이렇게 중복없이 가는게 불변성
//     posts : [...initialState.posts, action.data],
// }

const store = createStore(reducer, initialState);

console.log('1st', store.getState());

const logIn = (data) => {
    // 유저가 로그인 했을때, data 를 받고 싶음
    return {
        type: "LOG_IN",
        data,
    }
};

const logOut = () =>{
    // 로그아웃 했을 때는 data 를 받을 필요 없음
    return {
        type: "LOG_OUT",
    }
}

const addPost = (data) =>{
    return {
        type:"ADD_POST",
        data,
    }
}

// 여기 위까지는 미리 만들어 둬야 하는 것들
// 여기 밑에 부분은 실행할 때 React 에서 함

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

// PS C:\Users\user\Desktop\임돼지\포트폴리오\redux_study\redux_1> node index2
// 1st { user: null, posts: [] }
// 2nd { user: { id: 1, name: 'junwoo', admin: true }, posts: [] }
// 3rd {
//   user: { id: 1, name: 'junwoo', admin: true },
//   posts: [ { userId: 1, id: 1, content: '안녕하세요' } ]
// }
// 4th {
//   user: { id: 1, name: 'junwoo', admin: true },
//   posts: [
//     { userId: 1, id: 1, content: '안녕하세요' },
//     { userId: 1, id: 2, content: '반갑습니다.' }
//   ]
// }
// 5th {
//   user: null,
//   posts: [
//     { userId: 1, id: 1, content: '안녕하세요' },
//     { userId: 1, id: 2, content: '반갑습니다.' }
//   ]
// }






