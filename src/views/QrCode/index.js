import React,{useState,useEffect} from 'react';
import * as S from './styles';
import Qr from 'qrcode.react';


import Header from '../../components/Header';
import Footer from '../../components/Footer';



function QrCode() {
    return (
        <S.Container>
            <Header />
                <S.Content>
                    <h1>CAPTURE O QRCODE PELO APP</h1>
                    <p>suas atividades serão sincronizadas com a do seu celular.</p>
                    <S.QrcodeArea>
                        <Qr value='getmacaddress' size={350}/>
                    </S.QrcodeArea>
                    <S.ValidationCode>
                        <span>Digite a numerção que apareceu no celular</span>
                        <input type="text" />
                        <button type="button">Sincronizar</button>
                    </S.ValidationCode>
                   
                </S.Content>
            <Footer />
        </S.Container>
      
    )
}

export default QrCode;