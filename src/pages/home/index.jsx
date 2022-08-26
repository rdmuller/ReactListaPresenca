import React, {useState} from 'react';
import './styles.css';
import Card from '../../components/card';

function Home() {
  const [studentName, setStudentName] = useState(); // aqui posso definir um valor inicial useState('Ronald')
  const [students, setStudents] = useState([]);

  function addStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit', second: '2-digit', })
    }

    setStudents(oldState => [...oldState, newStudent]);
  }

  return (
    <div className="container">
    <h1>Lista de presenças</h1>
    <input type="text" placeholder="Digite o nome" onChange={e => setStudentName(e.target.value)}/>
    <button type="button" onClick={addStudent}>Adicionar</button>
    {
      students.map(student => <Card nome={student.name} hora={student.time} />)
    }
    </div>
  )
}

export default Home;