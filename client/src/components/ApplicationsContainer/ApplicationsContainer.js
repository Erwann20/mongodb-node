import React, {useEffect} from "react"
import {useSelector, shallowEqual, useDispatch} from "react-redux"
import {getApplications, deleteApplication} from "../../actions/application.actions"
import Application from "../Applications/Application"
import styled from "styled-components"


const ApplicationsContainer = () => {
    const dispatch = useDispatch();

    //AFFICHER LES APPLICATIONS
    useEffect(() => {
        dispatch(getApplications());
    }, [dispatch]);

    const applications = useSelector((state) => state.applications)

    const renderApplications = applications.map((application) => {
        return <Application key={application._id} id={application._id}/>
    })

    const ApplicationContainer = styled.div `
        display: flex;
        flex-wrap: wrap;
    `

    return (
        <div>
            <h1>
                Applications
            </h1>
            <ApplicationContainer>
                {renderApplications}
            </ApplicationContainer>
        </div>
    )
}



export default ApplicationsContainer;