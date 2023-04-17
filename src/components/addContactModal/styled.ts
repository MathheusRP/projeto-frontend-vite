import styled from "styled-components";

const ContactModalStyled = styled.section`

    height: 100%;
    width: 100%;
    /* background-color: rgb(0, 0, 0, 0.3); */
    position: absolute;
    top: 0px;
    left: 0px;
    padding: 80px 0px 100px 0px;

    &.modalOff{
        display: none;
    }

    .modalContainer{
        height: 100%;
        width: 100%;
        background-color: rgb(0, 0, 0, 0.3);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        
        .closeButton{
            position: absolute;
            top: 20px;
            right: 10px;
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: 4px solid var(--grey6);
            background-color: rgb(200, 70, 70);
            color: var(--grey6);
            font-weight: 600;
        }

        form {
            background-color: var(--grey6);
            height: 90%;
            width: 90%;
            border-radius: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            gap: 16px;
            font-family: 'Bebas Neue', cursive;
            overflow-y: scroll;
            padding: 16px 0px;
            color: var(--grey1);
            &::-webkit-scrollbar {
            width: 0px;
            }

            .input {
                display: flex;
                flex-direction: column;
                gap: 10px;
                width: 90%;
                align-items: center;
                

                label {
                    /* font-family: 'Bebas Neue', cursive; */
                    font-size: 1rem;
                    font-weight: 600;
                }

                input {
                    height: 50px;
                    padding: 0px 16px;
                    outline: none;
                    border: none;
                    border-radius: 16px;
                    width: 100%;
                    font-family: 'Bebas Neue', cursive;
                    font-weight: 600;
                    font-size: 16px;
                }
            }

            .buttonAdd {
                font-size: 16px;
                font-family: 'Bebas Neue', cursive;
                font-weight: 600;
                padding: 5px 10px;
                background-color: transparent;
            }
        }

    }

`

export default ContactModalStyled