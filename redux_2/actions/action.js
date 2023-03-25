// 길어질 가능성이 있는 것들을 다 분리해서 만들어 주는것

const logIn = (data) => {

    return {
        type: "LOG_IN",
        data,
    }
};

// 이 함수들은 action creator 라고 한다.
const logOut = () =>{
    // return 안에 객체가 action 이고
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

module.exports = {
    logIn,
    logOut,
    addPost,
}