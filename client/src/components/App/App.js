import React from "react"
import ApplicationsContainer from "../ApplicationsContainer/ApplicationsContainer"
import Time from "../Time/Time"
import ApplicationVerticalMenu from "../ApplicationVerticalMenu/ApplicationVerticalMenu"
import styled from "styled-components"

const App = () => {
    return (
        <Home>
            <ApplicationVerticalMenu />
            <Time />
        </Home>
    )
}

const Home = styled.div`
    min-height: 100vh;

    font-family: 'Poppins', sans-serif;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default App;