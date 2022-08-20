import React from 'react'
import { Container } from '@mui/material'
import Searcher from './components/Searcher'
import { useState } from 'react'

function App() {

  const [inputUser, setInputUser] = useState('octocat');
  const [userStater, userState] = useState('inputUser');

  
  return (
    <Container sx={{
      background: 'whitesmoke',
      color: 'black',
      width: '80vw',
      height: '600px',
      borderRadius: '16px',
      marginTop: '40px',
      margin: '200px',
      marginBottom: '450px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Searcher inputUser={inputUser} setInputUser={setInputUser} />
    </Container>
  )
}

export default App
