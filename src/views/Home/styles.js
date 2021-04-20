import styled from 'styled-components';

export const Container = styled.div`
    width:100%;
`;

export const FilterArea = styled.div`
    width:100%;
    display:flex;
    justify-content:space-around;
    margin-top:30px;
    flex-wrap:wrap;

    button {
        background:none;
        border:none;
    }
`;

export const Content = styled.div`
     width:100%;
     display:flex;
     flex-wrap:wrap;
     justify-content:center;
`; 

export const Title = styled.div`
    width:100%;
    border-bottom:1px solid #211E7D;
    display:flex;
    justify-content:center;
    margin-bottom:20px;
    




    h3{
        color:#211E7D;
        
        position:relative;
        top:30px;
        display:flex;
        
        background:#FFF;
        padding:0 20px;
    }
`;