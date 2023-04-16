import styled from "styled-components";

const HomeStyled = styled.main`

    background-color: var(--color1);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    
    .container {
        height: 90%;
        width: 90%;
        max-width: 500px;
        max-height: 800px;
        border: 8px solid var(--grey5);
        border-radius: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
       
    }
`

export default HomeStyled