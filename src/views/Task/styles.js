import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const Form = styled.div`
    width:50%;
    margin-bottom:70px;

    
`;

export const TypeIcons = styled.div`
    width:100%;
    display:flex;
    justify-content:center;

    .inative {
        opacity:0.5;
    }

    button{
        border:none;
        background:none;
    }

    img {
        margin:10px;
        width:50px;
        height:50px;
        cursor:pointer;

        &:hover{
            opacity:0.5;
        }
    }
`;

export const Input = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin: 20px 0;

    span {
        color:#707070;
        margin:5px 0;
    }

    input {
        font-size:16px;
        padding:15px;
        border:none;
        border-bottom: 1px solid #EA6C0C;
    }

    img {
        width:20px;
        height:20px;
        position: relative;
        left:90%;
        bottom:30px;
    }
`;

export const TextArea = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    margin: 20px 0;

    span {
        color:#707070;
        margin:5px 0;
    }

    textarea {
        font-size:16px;
        border: 1px solid #EA6C0C;
    }

`;

export const Options = styled.div`
    display:flex;
    justify-content:space-between;

    button {
        font-size:18px;
        font-weight:bold;
        color:#211E7D;
        border:none;
        background:none;
        cursor:pointer;

        &:hover{
            opacity:0.7;
        }
    }

    div {
        display:flex;
        align-items:center;
        color:#EA6C0C;
        font-weight:bold;
        font-size:18px;
    }

`;

export const Save = styled.div`
    width:100%;
    button {
        width:100%;
        background:#EA6C0C;
        margin-top:20px;
        border:none;
        font-size:20px;
        color:#FFF;
        padding:20px; 
        border-radius:30px;
        cursor:pointer;

        &:hover {
            opacity:0.7;
        }
    }
`;




