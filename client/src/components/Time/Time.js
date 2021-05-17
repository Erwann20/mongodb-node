import Clock from 'react-live-clock';
import styled from 'styled-components';

const Time = () => {

    return(
        <>
            <TimeStyle><Clock format={'HH:mm:ss'} ticking={true} /></TimeStyle>
        </>
    )
}

const TimeStyle = styled.p `
    font-size: 6rem;
    letter-spacing: 0.8rem;
    min-width : 100%;
    text-align: center;
    font-family: 'Courier Prime', monospace;
`

export default Time;