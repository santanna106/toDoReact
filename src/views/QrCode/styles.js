import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
    display:flex;
    
    flex-direction:column;
    align-items:center;
    
`;

export const Content = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:50%;

    h1 {
        color:#EA6C0C;
    }

    p {
        color:#211E7D;
    }
`;

export const QrcodeArea = styled.div`

    width:100%;
    display:flex;
    justify-content:center;
    
   
`;

export const ValidationCode = styled.div`

    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:10px;

    span {
        margin-top:20px;
        margin-bottom:10px;
        text-transform:uppercase;
        font-weight:bold;
    }

    input {
        width:80%;
        font-size:18px;
        padding:10px;
        text-align:center;
    }

    button {
        font-weight:bold;
        background:#EA6C0C;
        color:#FFF;
        font-size:18px;
        padding:10px;
        border-radius:30px;
        border:none;
        cursor:pointer;
        margin-top:10px;
        margin-bottom:70px;
        width:80%;
        height:40px;

        &:hover {
            background:#211E7D;
        }
    }
    
   
`;

