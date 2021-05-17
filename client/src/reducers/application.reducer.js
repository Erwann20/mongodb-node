const applicationReducer = (state = [], action) => {
    switch (action.type) {
        case "GET_APPLICATIONS":
            return action.payload.applications
        case "DELETE_APPLICATION":
            return state.filter((application) => application._id !== action.payload)
        default:
            return []
    }
}



export default applicationReducer;