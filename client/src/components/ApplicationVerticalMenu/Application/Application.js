import { useSelector, useDispatch } from 'react-redux'
import {deleteApplication} from "../../../actions/application.actions"
import styled from "styled-components"

const selectApplicationById = (state, applicationId) => {
    return state.applications.find((application) => application._id === applicationId)
}

const Application = ({id}) => {
    const application = useSelector((state) => selectApplicationById(state, id))

    const dispatch = useDispatch()

    //const handlerDeleteApplication = () => {
    //    dispatch(deleteApplication(application._id))
    //}

    const ApplicationStyle = styled.div`
        width: 3rem;
        height: 3rem;
        background-color: ${application.backgroundColor};
        
        display: flex;
        justify-content: center;
        align-items: center;
        p {
            color : ${application.color}
        }
    `

    return (
        <>
            <a href={application.url} target="_blank" style={{textDecoration: "none"}}>
                <ApplicationStyle>
                    <p>{application.name.charAt(0)}</p>
                </ApplicationStyle>
            </a>
        </>
    )


}



export default Application;