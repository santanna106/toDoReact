import React,{useState,useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

import {typeICons} from '../../utils/typeicons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconCalender from '../../assets/calender.png';
import iconClock from '../../assets/clock.png';

function Task() {

    const [lateCount, setLateCount] = useState();
    const [type,setType] = useState();
    const [id,setId] = useState();
    const [done,setDone] = useState(false);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState();
    const [hour,setHour] = useState();
    const [macaddress,setMacAddress] = useState('11.11.11.11.110');

    async function lateVarify(){
        await api.get(`task/filter/late/11.11.11.11.110`)
                 .then(response => {
                     
                     setLateCount(response.data.length)
                 }).
                 catch(error => {
                     console.log(error)
                 });
    }

    async function save(){
        await api.post('/task',{
            macaddress,
            title,
            type,
            description,
            when: `${date}T${hour}:00.000`
        })
        .then(() => { alert('Tarefa Cadastrada com Sucesso')} )
    }

    useEffect(() => {
        lateVarify();
    },[])

    return (
        <S.Container>
           
            <Header lateCount={lateCount} />
                <S.Form>
                    <S.TypeIcons>
                        {
                            typeICons.map( (icon,index) => (
                                index > 0 && 
                                <button type="button" onClick={() => setType(index)}>
                                    <img src={icon} alt="Tipo de Tarefa"  className={type && type != index && 'inative'}/>
                                </button>
                                
                            ))
                        }
                    </S.TypeIcons>
                    <S.Input>
                        <span>Título</span>
                        <input type="Text" placeholder="Título da Tarefa" 
                            onChange={e => setTitle(e.target.value)} value={title}/>
                    </S.Input>
                    <S.TextArea>
                        <span>Descrição</span>
                        <textarea rows={5} placeholder="Detalhes da Tarefa"  onChange={e => setDescription(e.target.value)} value={description}/>
                    </S.TextArea>
                    <S.Input>
                        <span>Data</span>
                        <input type="date" onChange={e => setDate(e.target.value)} value={date}/>
                       
                    </S.Input>
                    <S.Input>
                        <span>Hora</span>
                        <input type="time" onChange={e => setHour(e.target.value)} value={hour} />
                       
                    </S.Input>
                    <S.Options>
                        <div>
                            <input type="checkbox" checked={done} onChange={()=> setDone(!done)}/>
                            <span>CONCLUÍDO</span>
                        </div>
                        <button type="button">
                            EXCLUIR
                        </button>
                    </S.Options>
                    <S.Save>
                        <button type="button" onClick={save}>Salvar</button>
                    </S.Save>
                </S.Form>
            <Footer/>
        </S.Container>
    );
  }
  
  export default Task;
  