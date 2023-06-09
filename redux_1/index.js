// ======================================= redux 의 state 요소 (store)
const { createStore } = require('redux');

const reducer = (prevState, action) => {
    // redux 가 불변성을 지켜야 하는 이유는 기록,추적 가능하게 하기 위해서
    // 때문에 매번 action 이 실행될때 마다 state 가 생기는데 그 역할을 reducer 가 해줌

    // 개인적으로 이렇게 생겼고 이런 이름을 가진 애가 바뀔거니까 이렇게 새로운 state 를 찍어내라고 Reducer 에 만들어주는듯?
    switch (action.type){
        case "CHANGE_COMP_A":
            return {
                // 스프레드 연산자 => 기존 state 를 얕은 복사를 해주고 
                // 내가 바꾸고 싶은것만 넣어주면 중복요소 를 없앨 수 있다.
                ...prevState,
                compA: action.data,
            };
        // action 이 많아질 수록 case 들이 점점 많아 진다. 
        case "CHANGE_COMP_B":
            return {
                ...prevState,
                compB: action.data,
            };
        case "CHANGE_COMP_C":
            return {
                ...prevState,
                compC: action.data,
            };
        // action type 의 오타가 있을 경우 잡아 주기 위해 default 는 기본적으로 해줌 
        default :
            return prevState;
            
    }

};

// Refactoring = 리팩토링(Refactoring)이란 "'결과의 변경 없이 코드의 구조를 재조장함'
const initialState = {
    compA: "a",
    compB: 12,
    compC: null,
};

// const nextState = {
//     스프레드 연산자 => 기존 state 를 얕은 복사를 해주고 
//     내가 바꾸고 싶은것만 넣어주면 중복요소 를 없앨 수 있다.
//     ...initialState,
//     compA: action.data,
// }

// initialState.compA = "b" 이렇게 편하게 바꿀 수 있지만 Redux 는 그것을 포기하고 안정성을 얻고 추적가능성을 가져감

const store = createStore(reducer, initialState);

console.log("1st", store.getState());

// ======================================= redux 의 action 요소 (action 을 동적으로 만드는 creator)
// action 은 그냥 객체라고 보면 된다.

// 다른 name 을 정할 때에도 마찬가지 이지만 action 의 name 을 만들때 에는 구체적으로 만들어도 되지만
// 추상적으로 만드는게 더 좋다. 이유는 비슷한 동작을 하는 함수나, 객체들 같은 경우에는 계속해서 
// 변수명을 만들어야 하는 상황이 생기는데 이것을 최대한 피할 수록 코드가 깔끔해 진다.
// 아래 예제를 참고 하자

const changeCompA = (data) => {
    // action 이 함수로 but 함수 자체가 action 이 아니라 
    // type 은 action 의 이름이라고 보면된다.
    // 참고로 이름은 아무렇게나 바꿔도 상관없다, but 이름은 거의 type 이라고 쓰고
    // data, payload, error, result 등 다양하다
    return {
        //  객체가 action 임 (action 자체를 동적으로 만들어냄)
        type: "CHANGE_COMP_A",
        data,
    }
};


// changeCompA(data:"b");

// 하지만 위와 같은 경우는 그럴 필요가 없다
// 아래와 같은 경우는 너무 구체적이기 때문에 비슷한 변수명을 계속해서 만들어야 한다.

const changeCompAtoB = {
    // type 은 action 의 이름이라고 보면된다.
    // 참고로 이름은 아무렇게나 바꿔도 상관없다, but 이름은 거의 type 이라고 쓰고
    // data, payload, error, result 등 다양하다
    type:"CHANGE_COMP_A",
    data:"b",
};
const changeCompAtoC = {
    type:"CHANGE_COMP_A_C",
    data:"c",
};
const changeCompAtoD = {
    type:"CHANGE_COMP_A_D",
    data:"d",
};

// ======================================= redux 의 실행 요소 (dispatch)

store.dispatch(changeCompA('b'));

// 이것과 같다고 보면 된다.
// store.dispatch({
//     type: 'CHANGE_COMP_A',
//     data: 'b',
// }); 

console.log("2nd", store.getState());

// PS C:\Users\user\Desktop\임돼지\포트폴리오\redux_study\redux_1> node index
// 1st { compA: 'a', compB: 12, compC: null }
// 2nd { compA: 'b', compB: 12, compC: null }

