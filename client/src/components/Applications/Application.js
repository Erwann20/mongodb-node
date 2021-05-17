import { useSelector, useDispatch } from 'react-redux'
import {deleteApplication} from "../../actions/application.actions"
import styled from "styled-components"

const selectApplicationById = (state, applicationId) => {
    return state.applications.find((application) => application._id === applicationId)
}

const Application = ({id}) => {
    const application = useSelector((state) => selectApplicationById(state, id))

    const dispatch = useDispatch()

    const handlerDeleteApplication = () => {
        dispatch(deleteApplication(application._id))
    }

    const ApplicationStyle = styled.div`
        width: 20rem;
        height: 10rem;
        margin: 6px;
        background-color: ${application.color};
        p {
            color: black;
        }
    `

    return (
        <>
            <a href={application.url} target="_blank" style={{textDecoration: "none"}}>
                <ApplicationStyle>
                    <p>{application.name}</p>
                </ApplicationStyle>
            </a>
            <button onClick={() => {handlerDeleteApplication()}}>Delete</button>
        </>
    )


}



export default Application;