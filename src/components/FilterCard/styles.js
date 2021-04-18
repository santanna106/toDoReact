import styled from 'styled-components';

export const Container = styled.div`
width:200px;
height:60px;
background:${props => props.actived ? '#EA6C0C' :  '#211E7D'} ;
padding:10px;
display:flex;
flex-direction:column;
justify-content:space-around;
border-radius:5px;
cursor:pointer;

    img{
        width: 25px;
        height: 25px; 
    }

    span {
        color:#FFF;
        font-weight:bold;
        align-self:flex-end;
        font-size:18px;
    }
    &:hover{
        background:#EA6C0C

    }   

   
`;