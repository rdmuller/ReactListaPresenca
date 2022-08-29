import React, { useState, useEffect } from 'react';
import './styles.css';
import { Card, CardProps } from '../../components/card';

type ApiGitHubResponse = {
  name: string;
  avatar_url: string;
}

type User = {
  name: string;
  avatar: string;
}

function Home() {
  const [studentName, setStudentName] = useState(''); // aqui posso definir um valor inicial useState('Ronald')
  const [students, setStudents] = useState<CardProps[]>([]);
  const [userGit, setUserGit] = useState<User>({} as User)

  function addStudent() {
    const newStudent: CardProps = {
      nome: studentName,
      hora: new Date().toLocaleTimeString('pt-br', {hour: '2-digit', minute: '2-digit', second: '2-digit', })
    }

    setStudents(oldState => [...oldState, newStudent]);
  }

  useEffect(() => {
    /*fetch('https://api.github.com/users/rdmuller')
    .then(response => response.json())
    .then(data => {
      setUserGit({
        name: data.name,
        avatar: data.avatar_url,
      })
    })*/

    // ### Outra forma de escrever o código acima
    async function getUserGit() {
      const response = await fetch('https://api.github.com/users/rdmuller');
      const data = await response.json() as ApiGitHubResponse;
      setUserGit({
        name: data.name,
        avatar: data.avatar_url,
      })
    }
    getUserGit()

  }, []);

  return (
    <div className="container">
      <header>
        <h1>Lista de presenças</h1>
        <div>
          <strong>{userGit.name}</strong>
          <img src={userGit.avatar} alt="Foto do perfil" />
        </div>
      </header>
    <input type="text" placeholder="Digite o nome" onChange={e => setStudentName(e.target.value)}/>
    <button type="button" onClick={addStudent}>Adicionar</button>
    {
      students.map(student => 
        <Card 
          key={student.hora}
          nome={student.nome} 
          hora={student.hora} />)
    }
    </div>
  )
}

export default Home;