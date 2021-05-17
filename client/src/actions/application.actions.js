import axios from "axios";

export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const getApplications = () => async (dispatch) => {
    const applications = await axios.get("http://localhost:5500/applications")
    dispatch({
        type: "GET_APPLICATIONS",
        payload: {
            applications: applications.data
        }
    })
}

export const deleteApplication = (id) => async (dispatch) => {
    console.log(id);
    const applications = await axios.delete("http://localhost:5500/applications/" + id);
    dispatch({
        type: "DELETE_APPLICATION",
        payload: id
    })
}