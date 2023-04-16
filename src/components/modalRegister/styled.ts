import styled, { css } from "styled-components";

const ModalStyled = styled.section`

    height: 100%;
    width: 100%;
    background-color: var(--color1);
    position: absolute;
    border-radius: 22px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
    /* display: none; */

    &::-webkit-scrollbar {
            width: 0px;
    }

    form {
        
        display: flex;
        width: 90%;
        flex-direction: column;
        gap: 20px;
        margin: 50px 0px;
        /* background-color: aqua; */
        padding-top: 50px;
        animation-name: modal;
        animation-duration: 1.5s;
        
        h1 {
        align-self: center;
        font-family: 'Bebas Neue', cursive;
        color: var(--grey6);
        }

        .input {
        display: flex;
        flex-direction: column;
        /* border: solid 2px red; */
        width: 100%;
        font-family: 'Bebas Neue', cursive;
        gap: 10px;

            label {
                font-size: 1.1rem;
                color: var(--grey6);
                font-weight: 600;
            }

            input {
                height: 50px;
                border: none;
                background-color: transparent;
                border-bottom: solid 3px var(--grey6);
                padding: 0px 16px;
                font-size: 1rem;
                font-weight: 600;
                color: var(--grey6);
                outline: none;

                &::placeholder{
                    color: var(--grey3);
                }
            }

            p {
            height: 20px;
            color: rgb(200, 60, 60);
            }
        
        }

        .buttons {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 16px;
            color: var(--grey6);
            font-weight: 600;

            button {
                height: 45px;
                width: 120px;
                border-radius: 8px;
                border: 4px solid var(--grey6);
                background-color: transparent;
                color: var(--grey6);
                font-weight: 600;
                font-size: 16px;
            }
        }

        &.modalOff {
            animation-name: closeModal;
            animation-duration: 1.5s;
        }
    }
    
    &.closeModal {
        display: none;
    }

    @keyframes modal {
        0% {
            margin-top: -450%;
        }

        100% {
            margin-top: 50;
        }
    }

    @keyframes closeModal {
        0% {
            margin-top: 50px;
        }

        100% {
            margin-top: -450%;
        }
    }

`

export default ModalStyled