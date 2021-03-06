import React,{useMemo} from 'react'
import * as S from './styles';
import {format} from 'date-fns';


import {typeICons} from '../../utils/typeicons';


export default function TaskCard({type,title,when,done}) {

    const date = useMemo(() => format(new Date(when) ,'dd/MM/yyyy'));
    const hour = useMemo(() => format(new Date(when) ,'HH:mm'));

    
    return (
        <S.Container done={done}>
           <S.TopCard>
               <img src={typeICons[type]} alt={'Icon da Tarefa'}/>
               <h3>{title}</h3>
           </S.TopCard>
           <S.BottomCard>
               <strong>{date}</strong>
               <span>{hour}</span>
           </S.BottomCard>
        </S.Container>
    )
}
