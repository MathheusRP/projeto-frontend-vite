import { createGlobalStyle } from "styled-components";


const GlobalStyled = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

    * {
        padding: 0px;
        margin: 0px;
        box-sizing: border-box;
    }

    button {
        border: none;
    }

    li ul {
        list-style: none;
    }

    :root {

        --color1: #521735;
        
        --grey0:  #0B0D0D;
        --grey1:  #212529;
        --grey2:  #495057;
        --grey3:  #868E96;
        --grey4:  #ADB5BD;
        --grey5:  #CED4DA;
        --grey6:  #DEE2E6;
        --grey7:  #E9ECEF;
        --grey8:  #F1F3F5;
        --grey9:  #F8F9FA;
        --grey10: #FDFDFD;
    }


`

export default GlobalStyled