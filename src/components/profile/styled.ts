import styled from "styled-components";

export const ProfileStyled = styled.section`

    background-color: var(--grey4);
    position: absolute;
    height: 90%;
    width: 100%;
    z-index: 1;
    top: 10px;
    padding: 100px 0px;
    display: flex;
    align-items: center;
    justify-content: center;

    .info {
        /* background-color: var(--grey2); */
        height: 100%;
        width: 90%;
        border-radius: 16px;
        display: flex;
        flex-direction: column;
        /* align-items: center; */
        justify-content: center;
        gap: 26px;
        /* padding: 0px 16px; */
        color: var(--grey1);
        font-family: 'Bebas Neue', cursive;

        h2 {
            font-size: 28px;
        }

        p {
            font-size: 18px;
            
        }
    }

    &.displayOff{
        display: none;
    }

`