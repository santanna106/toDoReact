import styled from 'styled-components';

export const Container = styled.div`
width:100%;
height:70px;
background:#211E7D;
display:flex;
border-bottom: 5px solid #EA6C0C;
`;

export const LeftSide = styled.div`
width:50%;
height:70px;
display:flex;
align-items:center;
padding-left:10px;
img {
    width:100px;
    height:40px;
}

`;

export const RightSide = styled.div`
width:50%;
height:70px;
display:flex;
align-items:center;
justify-content:flex-end;

button {
        background:none;
        border:none;
        cursor:pointer;
    }

a,button {
    color:#FFF;
    font-weight:bold;
    text-decoration:none;
    margin: 0 10px;

   

    &:hover{
        color:#EA6C0C
    }
}

#notification {
    img {
        width: 25px ;
        height: 25px;
    }

    span {
        background:#FFF;
        color:#EA6C0C;
        padding: 3px 7px;
        border-radius:50%;
        position: relative;
        top: -20px;
        right: 10px;
    }

    &:hover {
        opacity:0.5;
    }
}

.dividir ::after{
    content:"|";
    padding: 0 10px;
    color:#FFF

}

`;

