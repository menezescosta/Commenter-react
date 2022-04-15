import styled from "styled-components";

export const Container=styled.div`
    background-color:#3936C0 ;
    width:414px ;
    min-height:800px ;
    margin:0 auto ;
    display:flex ;
    flex-direction:column ;
    align-items:center ;
    padding: 5px;

    img{
        margin-top:50px ;
    }
    textarea{
        resize:none ;
        width:342px ;
        height:138px ;
        margin-top:50px ;
        margin-bottom:25px ;
        padding:5px ;
    }
`;

export const Button=styled.button`
background-color:${props=>props.isOn?'#000':'gray'} ;
border-radius:10px;
width:342px;
height:64px;
color:${props=>props.isOn?'#fff':'#000'} ;
border:none ;
font-size:17px;
cursor: pointer;
`;
export const List=styled.ul`
    li{background-color:rgba(255,255,255,0.14) ;
    width:342px ;
    height:68px ;
    margin-top:10px ;
    list-style-type:none ;
    color:#fff ;
    padding:5px ;
    display:flex ;
    align-items:center ;
    justify-content:center ;
    }
`;