const initialState = {
    isLoggingIn: true,
    data:null,
};

// userReducer 와 postReducer 를 분리 해 주었기 때문에 initialState
//  의 값을 index2.js 의 initialState 값과 같게 해준다. 

const userReducer = (prevState=initialState, action) => {
    switch (action.type){
        case "LOG_IN":
            return {
                ...prevState,
                data: action.data,
            };
        case "LOG_OUT":
            return {
                ...prevState,
                data: null,
            };
        default :
            return prevState;
            
    }

};

module.exports = userReducer