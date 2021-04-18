import React from 'react'
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

export default function Header() {
    return (
        <S.Container>
            <S.LeftSide>
              
                <img src={logo} alt="Logo" />
            </S.LeftSide>
            <S.RightSide>
               <a hre="#">INÍCIO</a>
               <span className="dividir"/>
               <a hre="#">NOVA TAREVA</a>
               <span className="dividir"/>
               <a hre="#">SINCRONIZAR CELULAR</a>
               <span className="dividir"/>
               <a hre="#" id="notification">
                   <img src={bell} alt="Notificação" />
                   <span>5</span>

               </a>
            </S.RightSide>
        </S.Container>
    )
}
