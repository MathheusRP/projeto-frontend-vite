import styled from "styled-components";

const DashboardStyled = styled.main`

    background-color: var(--color1);
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    .container {
        height: 90%;
        width: 90%;
        border: 8px solid var(--grey6);
        border-radius: 32px;
        position: relative;
        max-width: 600px;
        max-height: 900px;
    }

    header {
        height: 80px;
        width: 100%;
        border-bottom: 4px solid var(--grey6);
        background-color: var(--color2);
        color: var(--grey6);
        border-radius: 24px 24px 0px 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        z-index: 2;
    }

    .display {
        width: 100%;
        height: 100%;
        background-color: rgb(200, 200, 200, 0.2);
        position: relative;
        display: flexbox;
        align-items: center;
        justify-content: center;
        padding: 80px 0px 100px 0px;
        border-radius: 20px;
    }

    .buttons {
        height: 100px;
        width: 100%;
        border-top: 4px solid var(--grey6);
        background-color: var(--color2);
        border-radius: 0px 0px 24px 24px;
        position: absolute;
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
        z-index: 2;

        button {
            height: 50px;
            width: 50px;
            font-size: 32px;
            background-color: transparent;
            border: solid 3px var(--grey6);
            color: var(--grey6);
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 12px;
            box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.5);

            &:hover {
                transform: scale(1.2);
                box-shadow: 0px 0px 16px rgb(0, 0, 0, 0.7);
            }
        }

    }
`

export default DashboardStyled