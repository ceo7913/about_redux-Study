const initialState = [];

// userReducer 와 postReducer 를 분리 해 주었기 때문에 initialState
//  의 값을 index2.js 의 initialState 값과 같게 해준다. 
// posst 의 경우 [] 만 존재하기 때문에 [] 로 표시 

const postReducer = (prevState = initialState, action) => {
    switch (action.type){
        case "ADD_POST":
            // initialState 가 return  이 됨
            // 때문에 객체가 아닌 배열만
            return  [...prevState, action.data];
        default :
            return prevState;
            
    }

};

module.exports = postReducer