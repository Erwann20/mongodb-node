import React, {useEffect} from "react"
import styled from "styled-components";
import {useSelector, useDispatch} from "react-redux"
import {getApplications} from "../../actions/application.actions"
import Application from './Application/Application'


const ApplicationVerticalMenu = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getApplications());
    }, [dispatch]);

    const applications = useSelector((state) => state.applications)

    const renderApplications = applications.map((application) => {
        return <Application key={application._id} id={application._id}/>
    })

    return (
        <MenuStyle>
            {renderApplications}
        </MenuStyle>
    )
}

const MenuStyle = styled.div `
    width: 3rem;
    height: 100vh;

    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    align-items: flex-start;
    flex-direction : column;
`
export default ApplicationVerticalMenu;