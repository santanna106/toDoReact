import React,{useState,useEffect} from 'react';
import * as S from './styles';
import {format} from 'date-fns';
import {Redirect} from 'react-router-dom';

import api from '../../services/api';

import {typeICons} from '../../utils/typeicons';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import iconCalender from '../../assets/calender.png';
import iconClock from '../../assets/clock.png';

function Task({match}) {
    const [redirect,setRedirect] = useState(false);
 
    const [type,setType] = useState();
    const [id,setId] = useState();
    const [done,setDone] = useState(false);
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    const [date,setDate] = useState();
    const [hour,setHour] = useState();
    const [macaddress,setMacAddress] = useState('11.11.11.11.110');

    
    async function Remove(){
        const res = window.confirm('Deseja realmente remover a tarefa? ')
        if(res === true){
            alert('ok, vamos remover');
            await api.delete(`/task/${match.params.id}`)
             .then(() => setRedirect(true));
        }
    }

    async function loadTaskDetails(){
        await api.get(`/task/${match.params.id}`)
        .then(response => {
           setType(response.data.type)
           setTitle(response.data.title)
           setDone(response.data.done)
           setDescription(response.data.description)
           setDate(format(new Date(response.data.when),'yyyy-MM-dd'))
           setHour(format(new Date(response.data.when),'HH:mm'))

           console.log('RESPONSE: ',response);
        })
    }

    async function save(){

        //Validacao

        if(!title)
            return alert('Você precisa informar o título');
        else if (!description) {alert('Você precisa informar a descrição');}
        else if (!type) {alert('Você precisa informar o tipo da tarefa');}
        else if (!date) {alert('Você precisa informar a data');}
        else if (!hour) {alert('Você precisa informar a hora');}

        if(match.params.id){

            await api.put(`/task/${match.params.id}`,{
                macaddress,
                done,
                title,
                type,
                description,
                when: `${date}T${hour}:00.000`
            })
            .then(() => {
                setRedirect(true)
             } )

        } else {

            await api.post('/task',{
                macaddress,
                title,
                type,
                description,
                when: `${date}T${hour}:00.000`
            })
            .then(() =>  setRedirect(true) )

        }

        
    }

    useEffect(() => {
        loadTaskDetails();
    },[])

    return (
        <S.Container>
           {redirect && <Redirect to="/" />}
            <Header />
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
                        {match.params.id && <button type="button" onClick={Remove}>
                            EXCLUIR
                        </button>}
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
  