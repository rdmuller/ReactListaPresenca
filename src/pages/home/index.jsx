import React, {useState} from 'react';
import './styles.css';
import Card from '../../components/card';

function Home() {
  const [studentName, setStudentName] = useState(); // aqui posso definir um valor inicial useState('Ronald')

  return (
    <div className="container">
    <h1>Lista de presenças</h1>
    <h1>Nome: {studentName}</h1>
    <input type="text" placeholder="Digite o nome" onChange={e => setStudentName(e.target.value)}/>
    <button type="button">Adicionar</button>
    <Card nome="Ronald" hora="07:42:01"/>
    <Card nome="João" hora="17:29:59"/>
    </div>
  )
}

export default Home;