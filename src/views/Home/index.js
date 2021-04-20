import React,{useState,useEffect} from 'react';
import * as S from './styles';

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import FilterCard from '../../components/FilterCard';
import TaskCard from '../../components/TaskCard';




function Home() {

    const [filterActived,setFilterActived] = useState('all');
    const [tasks, setTasks] = useState([]);
    const [lateCount, setLateCount] = useState();

    async function loadTask(){
        await api.get(`task/filter/${filterActived}/11.11.11.11.110`)
                 .then(response => {
                     console.log(response.data);
                     setTasks(response.data)
                 }).
                 catch(error => {
                     console.log(error)
                 });
    }

    async function lateVarify(){
        await api.get(`task/filter/late/11.11.11.11.110`)
                 .then(response => {
                     
                     setLateCount(response.data.length)
                 }).
                 catch(error => {
                     console.log(error)
                 });
    }

    useEffect(() => {
        loadTask();
        lateVarify();
    },[filterActived])

    function notification(){
        setFilterActived('late');
    }

    return (
        <S.Container>
           
            <Header lateCount={lateCount} clickNotification={notification}/>
            <S.FilterArea>
                <button type="button"  onClick={() => setFilterActived("all")}>
                    <FilterCard title={"Todos"}  actived={filterActived === "all"}/>
                </button>
                <button type="button"  onClick={() => setFilterActived("today")}>
                    <FilterCard title={"Hoje"}   actived={filterActived === "today"} />
                </button>
                <button type="button" onClick={() => setFilterActived("week")}>
                    <FilterCard title={"Semana"} actived={filterActived === "week"} />
                </button>
                <button type="button"  onClick={() => setFilterActived("month")}> 
                    <FilterCard title={"Mês"}    actived={filterActived === "month"} />
                </button>
                <button type="button" onClick={() => setFilterActived("year")}>
                    <FilterCard title={"Ano"}   actived={filterActived === "year"}  />
                </button>
                
            </S.FilterArea>

            <S.Title>
                 <h3>{filterActived === 'late' ? 'TAREFAS ATRASADAS' : 'TAREFAS' }</h3>
            </S.Title>

            <S.Content>
                {
                    tasks.map( t => {
                        console.log('T: ', t);
                        return (
                            <TaskCard key={t._id} type={t.type} title={t.title} when={t.when} />
                        )
                    })
                   
                }
                
               
            </S.Content>
            <Footer/>
        </S.Container>
    );
  }
  
  export default Home;
  