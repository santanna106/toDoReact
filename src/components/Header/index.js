import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import api from '../../services/api';
import * as S from './styles';
import logo from '../../assets/logo.png';
import bell from '../../assets/bell.png';

export default function Header({clickNotification}) {

    const [lateCount, setLateCount] = useState();

    useEffect(() => {
        lateVarify();
    })

    async function lateVarify(){
        await api.get(`task/filter/late/11.11.11.11.110`)
                 .then(response => {
                     
                     setLateCount(response.data.length)
                 }).
                 catch(error => {
                     console.log(error)
                 });
    }


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
               
               <Link to="/qrcode">SINCRONIZAR CELULAR</Link>
               {
                   lateCount &&
                    <>
                        <span className="dividir"/>
                        <button onClick={clickNotification} id="notification">
                            <img src={bell} alt="Notificação" />
                            <span>{lateCount}</span>
                        </button>
                    </>
               }
              
            
            </S.RightSide>
        </S.Container>
    )
}
