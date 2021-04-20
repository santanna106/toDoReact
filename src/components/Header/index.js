import React from 'react'
import {Link} from 'react-router-dom';
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

export default function Header({lateCount,clickNotification}) {
    return (
        <S.Container>
            <S.LeftSide>
              
                <img src={logo} alt="Logo" />
            </S.LeftSide>
            <S.RightSide>
                <Link to="/">INÍCIO</Link>
               <span className="dividir"/>
               <Link to="/task">NOVA TAREVA</Link>
               <span className="dividir"/>
               <a hre="#">SINCRONIZAR CELULAR</a>
               <span className="dividir"/>
               <button onClick={clickNotification} id="notification">
                   <img src={bell} alt="Notificação" />
                   <span>{lateCount}</span>
               </button>
            
            </S.RightSide>
        </S.Container>
    )
}
