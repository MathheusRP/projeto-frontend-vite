import styled, { css } from "styled-components";

const ListContactStyled = styled.section`

    width: 90%;
    height: 95%;
    display: flex;
    flex-direction: column;
    
    .header {
        width: 100%;
        margin-bottom: 16px;
        display: flex;
        align-items: center;
        justify-content: space-around;

        button {
            font-size: 25px;
            background-color: transparent;
            color: var(--grey6);
            height: 40px;
            width: 40px;
            border-radius: 50%;

            &:hover {
                color: var(--grey1);
                background-color: var(--grey6);
                transform: scale(1.2);
            }
        }
    }
    
    .containerList{
        height: 100%;
        overflow-y: scroll;
        border-radius: 12px;

        &::-webkit-scrollbar {
            width: 0px;
        }

        ul {
            width: 100%;
            margin-top: 16px;
            /* margin-bottom: 46px; */
            display: flex;
            flex-direction: column;
            gap: 16px;
        

            li {
                /* height: 80px; */
                width: 100%;
                display: flex;
                border-radius: 12px;
                background-color: var(--grey5);
                flex-direction: column;
                padding: 16px;
                color: var(--grey1);
                gap: 10px;
                font-weight: 600;

                h3 {
                    color: rgb(80, 80, 200);
                }            

            
            }
            

            /* #teste1 {
                background-color: beige;
            } */

    

            ${({ focuss }: any) => {
        return css` 
                    #${focuss}{
                        background-color: var(--grey3);
                        transition: 0.7s;
                    }
                `
    }}
            
        }
    }

`

export default ListContactStyled