const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: null,
    user: null,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "USER_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "USER_LOADED":
            return  {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case "LOGIN_SUCCESS":
            return  {
                ...state,
                isAuthenticated: true,
                isLoading: false,
                user: action.payload
            }
        case "REGISTER_SUCCESS":
            return  {
                ...state,
                ...action.payload,
                isAuthenticated: true,
                isLoading: false
            }  
        default:
            return []
    }
}



export default applicationReducer;